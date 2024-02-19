import { render, screen } from '@testing-library/react';
import PaginationNav from './PaginationNav';

test('when on page 1/10, should show |<, <, [1], 2, 3, >, >|', () => {
    // Act.
    render(<PaginationNav pageNumber={1} pageSize={10} totalResults={100} />);
    const first = screen.queryByTestId('first-page');
    const previous = screen.queryByTestId('previous-page');
    const page1 = screen.queryByTestId('page-1');
    const page2 = screen.queryByTestId('page-2');
    const page3 = screen.queryByTestId('page-3');
    const page4 = screen.queryByTestId('page-4');
    const next = screen.queryByTestId('next-page');
    const last = screen.queryByTestId('last-page');

    // Assert.
    expect(first).toBeInTheDocument();
    expect(first).toHaveClass('disabled');
    expect(previous).toBeInTheDocument();
    expect(previous).toHaveClass('disabled');
    expect(page1).toBeInTheDocument();
    expect(page1).toHaveClass('active');
    expect(page2).toBeInTheDocument();
    expect(page3).toBeInTheDocument();
    expect(page4).not.toBeInTheDocument();
    expect(next).toBeInTheDocument();
    expect(last).toBeInTheDocument();
});

test('when on page 2/10, should show |<, <, 1, [2], 3, 4, >, >|', () => {
    // Act.
    render(<PaginationNav pageNumber={2} pageSize={10} totalResults={100} />);
    const first = screen.queryByTestId('first-page');
    const previous = screen.queryByTestId('previous-page');
    const page1 = screen.queryByTestId('page-1');
    const page2 = screen.queryByTestId('page-2');
    const page3 = screen.queryByTestId('page-3');
    const page4 = screen.queryByTestId('page-4');
    const page5 = screen.queryByTestId('page-5');
    const next = screen.queryByTestId('next-page');
    const last = screen.queryByTestId('last-page');

    // Assert.
    expect(first).toBeInTheDocument();
    expect(previous).toBeInTheDocument();
    expect(page1).toBeInTheDocument();
    expect(page2).toBeInTheDocument();
    expect(page2).toHaveClass('active');
    expect(page3).toBeInTheDocument();
    expect(page4).toBeInTheDocument();
    expect(page5).not.toBeInTheDocument();
    expect(next).toBeInTheDocument();
    expect(last).toBeInTheDocument();
});

test('when on page 3/10, should show |<, <, 1, 2, [3], 4, 5, >, >|', () => {
    // Act.
    render(<PaginationNav pageNumber={3} pageSize={10} totalResults={100} />);
    const first = screen.queryByTestId('first-page');
    const previous = screen.queryByTestId('previous-page');
    const page1 = screen.queryByTestId('page-1');
    const page2 = screen.queryByTestId('page-2');
    const page3 = screen.queryByTestId('page-3');
    const page4 = screen.queryByTestId('page-4');
    const page5 = screen.queryByTestId('page-5');
    const page6 = screen.queryByTestId('page-6');
    const next = screen.queryByTestId('next-page');
    const last = screen.queryByTestId('last-page');

    // Assert.
    expect(first).toBeInTheDocument();
    expect(previous).toBeInTheDocument();
    expect(page1).toBeInTheDocument();
    expect(page2).toBeInTheDocument();
    expect(page3).toBeInTheDocument();
    expect(page3).toHaveClass('active');
    expect(page4).toBeInTheDocument();
    expect(page5).toBeInTheDocument();
    expect(page6).not.toBeInTheDocument();
    expect(next).toBeInTheDocument();
    expect(last).toBeInTheDocument();
});


test('when on page 4/10, should show |<, <, 2, 3, [4], 5, 6, >, >|', () => {
    // Act.
    render(<PaginationNav pageNumber={4} pageSize={10} totalResults={100} />);
    const first = screen.queryByTestId('first-page');
    const previous = screen.queryByTestId('previous-page');
    const page1 = screen.queryByTestId('page-1');
    const page2 = screen.queryByTestId('page-2');
    const page3 = screen.queryByTestId('page-3');
    const page4 = screen.queryByTestId('page-4');
    const page5 = screen.queryByTestId('page-5');
    const page6 = screen.queryByTestId('page-6');
    const page7 = screen.queryByTestId('page-7');
    const next = screen.queryByTestId('next-page');
    const last = screen.queryByTestId('last-page');

    // Assert.
    expect(first).toBeInTheDocument();
    expect(previous).toBeInTheDocument();
    expect(page1).not.toBeInTheDocument();
    expect(page2).toBeInTheDocument();
    expect(page3).toBeInTheDocument();
    expect(page4).toBeInTheDocument();
    expect(page4).toHaveClass('active');
    expect(page5).toBeInTheDocument();
    expect(page6).toBeInTheDocument();
    expect(page7).not.toBeInTheDocument();
    expect(next).toBeInTheDocument();
    expect(last).toBeInTheDocument();
});

test('when on page 8/10, should show |<, <, 6, 7, [8], 9, 10, >, >|', () => {
    // Act.
    render(<PaginationNav pageNumber={8} pageSize={10} totalResults={100} />);
    const first = screen.queryByTestId('first-page');
    const previous = screen.queryByTestId('previous-page');
    const page5 = screen.queryByTestId('page-5');
    const page6 = screen.queryByTestId('page-6');
    const page7 = screen.queryByTestId('page-7');
    const page8 = screen.queryByTestId('page-8');
    const page9 = screen.queryByTestId('page-9');
    const page10 = screen.queryByTestId('page-10');
    const page11 = screen.queryByTestId('page-11');
    const next = screen.queryByTestId('next-page');
    const last = screen.queryByTestId('last-page');

    // Assert.
    expect(first).toBeInTheDocument();
    expect(previous).toBeInTheDocument();
    expect(page5).not.toBeInTheDocument();
    expect(page6).toBeInTheDocument();
    expect(page7).toBeInTheDocument();
    expect(page8).toBeInTheDocument();
    expect(page8).toHaveClass('active');
    expect(page9).toBeInTheDocument();
    expect(page10).toBeInTheDocument();
    expect(page11).not.toBeInTheDocument();
    expect(next).toBeInTheDocument();
    expect(last).toBeInTheDocument();
});

test('when on page 9/10, should show |<, <, 7, 8, [9], 10, >, >|', () => {
    // Act.
    render(<PaginationNav pageNumber={9} pageSize={10} totalResults={100} />);
    const first = screen.queryByTestId('first-page');
    const previous = screen.queryByTestId('previous-page');
    const page6 = screen.queryByTestId('page-6');
    const page7 = screen.queryByTestId('page-7');
    const page8 = screen.queryByTestId('page-8');
    const page9 = screen.queryByTestId('page-9');
    const page10 = screen.queryByTestId('page-10');
    const page11 = screen.queryByTestId('page-11');
    const next = screen.queryByTestId('next-page');
    const last = screen.queryByTestId('last-page');

    // Assert.
    expect(first).toBeInTheDocument();
    expect(previous).toBeInTheDocument();
    expect(page6).not.toBeInTheDocument();
    expect(page7).toBeInTheDocument();
    expect(page8).toBeInTheDocument();
    expect(page9).toBeInTheDocument();
    expect(page9).toHaveClass('active');
    expect(page10).toBeInTheDocument();
    expect(page11).not.toBeInTheDocument();
    expect(next).toBeInTheDocument();
    expect(last).toBeInTheDocument();
});

test('when on page 10/10, should show |<, <, 8, 9, [10], >, >|', () => {
    // Act.
    render(<PaginationNav pageNumber={10} pageSize={10} totalResults={100} />);
    const first = screen.queryByTestId('first-page');
    const previous = screen.queryByTestId('previous-page');
    const page7 = screen.queryByTestId('page-7');
    const page8 = screen.queryByTestId('page-8');
    const page9 = screen.queryByTestId('page-9');
    const page10 = screen.queryByTestId('page-10');
    const page11 = screen.queryByTestId('page-11');
    const next = screen.queryByTestId('next-page');
    const last = screen.queryByTestId('last-page');

    // Assert.
    expect(first).toBeInTheDocument();
    expect(previous).toBeInTheDocument();
    expect(page7).not.toBeInTheDocument();
    expect(page8).toBeInTheDocument();
    expect(page9).toBeInTheDocument();
    expect(page10).toBeInTheDocument();
    expect(page10).toHaveClass('active');
    expect(page11).not.toBeInTheDocument();
    expect(next).toBeInTheDocument();
    expect(next).toHaveClass('disabled');
    expect(last).toBeInTheDocument();
    expect(last).toHaveClass('disabled');
});
