import githubWrapper from '../src/githubWrapper.js'

describe('githubWrapper tests', () => {
  it('allows to set the token throguh constructor', () => {
    let ghWrapper = new githubWrapper('123abc')
    expect(ghWrapper.token).toEqual('123abc');
  });

  it('allows to change token through token setter', () => {
    let ghWrapper = new githubWrapper('123abc');
    ghWrapper.token = 'newGHtoken'
    expect(ghWrapper.token).toEqual('newGHtoken');
  });

  describe('#root', () => {
    let ghWrapper = new githubWrapper(process.env["GITHUB_TOKEN"]);
    ghWrapper.root().then(response => {
      expect(response.data.current_user_url).toEqual('https://api.github.com/user');
    })
  });
});
