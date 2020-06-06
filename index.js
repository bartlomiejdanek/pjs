const axios = require('axios');

class GithHubWrapper {
  constructor(token) {
    this.token = token
    this.client = axios.create({
      baseURL: 'https://api.github.com/',
      responseType: 'json',
      headers: {
        'X-Custom-Header': this.token,
        'Accept': 'application/vnd.github.v3+json',
        'Authorization': 'token ' + this.token
      }
    })
  }

  getRequest(path) {
    return this.client.get(path)
  }

  postRequest(path, payload) {
    return this.client.post(path, payload)
  }

  patchRequest(path, payload) {
    return this.client.patch(path, payload)
  }

  root() {
    return this.getRequest('/')
  }

  createGist(payload) {
    return this.postRequest('/gists', payload)
  }

  getGist(gistId) {
    return this.getRequest(`/gists/${gistId}`)
  }

  // https://developer.github.com/v3/gists/#update-a-gist
  updateGist(gistId, payload) {
    return this.patchRequest(`/gists/${gistId}`, payload)
  }

  collection(githubUsername, per_page = 30, page = 1) {
    return this.getRequest(`/users/${githubUsername}/gists?per_page=${per_page}&page=${page}`)
  }
}
let token = process.env['GITHUB_TOKEN']
// https://nodejs.org/dist/latest-v8.x/docs/api/process.html#process_process_env
let ghWrapper = new GithHubWrapper(token)
let gistPayload = {
  "description": "Hello World Examples",
  "public": true,
  "files": {
    "hello_world.rb": {
      "content": "class HelloWorld\n   def initialize(name)\n      @name = name.capitalize\n   end\n   def sayHi\n      puts \"Hello !\"\n   end\nend\n\nhello = HelloWorld.new(\"World\")\nhello.sayHi"
    },
    "hello_world.py": {
      "content": "class HelloWorld:\n\n    def __init__(self, name):\n        self.name = name.capitalize()\n       \n    def sayHi(self):\n        print \"Hello \" + self.name + \"!\"\n\nhello = HelloWorld(\"world\")\nhello.sayHi()"
    },
    "hello_world_ruby.txt": {
      "content": "Run `ruby hello_world.rb` to print Hello World"
    },
    "hello_world_python.txt": {
      "content": "Run `python hello_world.py` to print Hello World"
    }
  }
}

// ghWrapper.root().then((response) => console.log(response.data))
// ghWrapper.getGist('<< GIST ID>>').then((response) => console.log(response.data))
// ghWrapper.createGist(gistPayload).then((response) => console.log(response.data))
// ghWrapper.getGist('6ba995c78adab722b9c28b5de420c7d8').then((response) => console.log(response.data))
//
let gistPayload2 = {
  "description": "Hello World!!!",
  "files": {
    "hello_world_ruby.txt": {
      "content": "Run `ruby hello_world.rb` or `python hello_world.py` to print Hello World",
      "filename": "hello_world.md"
    },
    "new_file.txt": {
      "content": "This is a new placeholder file."
    }
  }
}
 // x => 0...9
// 1xx => websocket / ative connections (client <-> server)
// 2xx => ok!
// 3xx => redirect => http => https | example.com/ => example.com/sing-in-page
// 4xx => application errors
// 5xx => server error
// 650 => no space left on device

// ghWrapper.updateGist('6ba995c78adab722b9c28b5de420c7d8', gistPayload2)
//   .then((response) => console.log(response))
//   .catch((error) => console.log(error.response))
//

ghWrapper.collection('bartlomiejdanek')
  .then((response) => response.data)
  .then((gists) => {
    // arr.forEach(callback[, thisArg])

    let fe = gists.forEach(function(item) {
      console.log(`${item.id}-${item.description}`)
      return item.id
    })

    let map = gists.map(function(item) {
      console.log(`${item.id}-${item.description}`)
      return `${item.id}-${item.description}`
    })

    console.log(fe)
    console.log("---------------------------------")
    console.log(map)
    // var new_array = arr.map(function callback(currentValue, index, array){ // Zwróć element nowej tablicy }[, thisArg])
  })


// https://developer.github.com/v3/#pagination


// https://api.github.com/user/repos?page=3&per_page=100

// - page -> nr strony
// - per_page -> ilosc elementow na jednej stronie

// 1000 itemow
// per_page 100
// page 3

// 1 1--100
// 2 101--200
// 3 201--300

