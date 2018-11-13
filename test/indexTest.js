describe("index.js", () => {
  it("adds event listener to document", () => {
    expect(document.addEventListener.calledOnce).to.be.true
  })
})
