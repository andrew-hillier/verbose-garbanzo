import { Link } from "react-router-dom";

export interface PaginationNavProps {
    pageNumber: number,
    pageSize: number,
    totalResults: number,
}

function PaginationNav(props: PaginationNavProps) {
    const pagesToShowEitherSideOfCurrent = 2;
    const startPageToRender = props.pageNumber - (pagesToShowEitherSideOfCurrent + 1);
    const endPageToRender = props.pageNumber + pagesToShowEitherSideOfCurrent;
    const totalPages = calculateTotalPages(props);

    const final = [];

    final.push(
        renderPageIndex(
            "first-page",
            "First",
            false,
            props.pageNumber === 1,
            1,
            props.pageSize));

    final.push(
        renderPageIndex(
            "previous-page",
            "Previous", // todo: render `&laquo;` properly.
            false,
            props.pageNumber === 1,
            props.pageNumber - 1,
            props.pageSize));

    // dynamically rendered page indices
    for (let i = startPageToRender; i < endPageToRender; i++) {
        const pageIndex = i + 1;

        if (pageIndex < 1) continue;
        if (pageIndex > totalPages) continue;

        final.push(
            renderPageIndex(
                `page-${pageIndex}`,
                pageIndex.toString(),
                pageIndex === props.pageNumber,
                false,
                pageIndex,
                props.pageSize));
    }

    final.push(
        renderPageIndex(
            "next-page",
            "Next", // todo: render `&raquo;` properly.
            false,
            props.pageNumber === totalPages,
            props.pageNumber + 1,
            props.pageSize));

    final.push(
        renderPageIndex(
            "last-page",
            "Last",
            false,
            props.pageNumber === totalPages,
            totalPages,
            props.pageSize));

    return (
        <nav>
            <ul className="pagination justify-content-center">
                {/* todo: spacer */}
                {final}
                {/* todo: spacer */}
            </ul>
        </nav>
    )

    function calculateTotalPages(props: PaginationNavProps) {
        let totalPages = Math.ceil(props.totalResults / props.pageSize);
        totalPages = totalPages === 0 ? 1 : totalPages;
        return totalPages;
    }

    function renderPageIndex(
        key: string,
        content: string,
        isActive: boolean,
        isDisabled: boolean,
        pageNumber: number,
        pageSize: number) {

        const active = isActive ? "active" : "";
        const disabled = isDisabled ? "disabled" : "";

        return (
            <li className={`page-item ${disabled} ${active}`} key={key} data-testid={key}>
                <Link className={`page-link`} to={`?pageNumber=${pageNumber}&pageSize=${pageSize}`}>{content}</Link>
            </li>
        );
    }
}

export default PaginationNav

