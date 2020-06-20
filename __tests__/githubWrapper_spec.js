import githubWrapper from '../src/githubWrapper.js';

describe('githubWrapper tests', () => {
  it('allows to set the token throguh constructor', () => {
    let ghWrapper = new githubWrapper('123ab')
    expect(ghWrapper.token).toEqual('123ab');
  });

  it('allows to change token through token setter', () => {
    let ghWrapper = new githubWrapper('123abc');
    ghWrapper.token = 'newGHtoken'
    expect(ghWrapper.token).toEqual('newGHtoken');
  });

  describe('#root', () => {
    it('returns all gist API endpoints', () => {
      let ghWrapper = new githubWrapper(process.env["GITHUB_TOKEN"]);
      ghWrapper.root().then(response => {
        expect(response.status).toEqual(200);
        expect(response.data.current_user_url).toEqual('https://api.github.com/user');
      })
    });
  });
});
