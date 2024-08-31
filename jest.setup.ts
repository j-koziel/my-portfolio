import "@testing-library/jest-dom"

beforeEach(() => {
  const mockIntersectionObserver = jest.fn();

  mockIntersectionObserver.mockReturnValue({
    observe: () => null,
    unobserve: () => null,
    disconnect: () => null,
  })

  window.IntersectionObserver = mockIntersectionObserver
})