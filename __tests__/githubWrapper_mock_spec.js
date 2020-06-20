const githubWrapper = jest.createMockFromModule('../src/githubWrapper.js').default;

describe('githubWrapper tests', () => {
  describe('#root', () => {
    it('returns all gist API endpoints', function() {
      const ghWrapper = new githubWrapper('dummy-token');

      const mockData = {data: {url: "https://example.com/ro"}}
      ghWrapper.root.mockImplementationOnce(() => Promise.resolve(mockData));

      ghWrapper.root().then(response => {
        expect(response.data.url).toEqual('https://example.com/ro');
      })
    });
  });
});

