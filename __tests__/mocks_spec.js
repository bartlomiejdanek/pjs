describe('mocks', () => {
  it('returns a value', () => {
    let myMock = jest.fn();

    // https://jestjs.io/docs/en/mock-function-api
    myMock.mockReturnValueOnce(10).mockReturnValueOnce('x').mockReturnValue(true);
    expect(myMock()).toEqual(10)
    expect(myMock()).toEqual('x')
    expect(myMock()).toEqual(true)
    expect(myMock()).toEqual(true)

    let myMock2 = jest.fn();
    myMock2.mockReturnValue("xy")
    expect(myMock2()).toEqual('xy')
    expect(myMock2()).toEqual('xy')
    expect(myMock2()).toEqual('xy')
    expect(myMock2()).toEqual('xy')
    expect(myMock2()).toEqual('xy')
  });

  it('mocks a callback function and returns a value', () => {
    let filterTestFn = jest.fn();

    filterTestFn.mockReturnValueOnce(true).mockReturnValueOnce(false).mockReturnValueOnce(true)

    let result = [11, 12, 13].filter(num => {
      // 1. 11
      // 2. 12
      // 3. 13
      return filterTestFn(num)
      // 11 => 1st true
      // 12 => 1st false
      // 13 => 2nd true

    });
    expect(result).toEqual([11,13])
  });
});
