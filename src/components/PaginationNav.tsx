export interface PaginationNavProps {
    offset: number,
    limit: number,
    total: number
}

function PaginationNav({ offset, limit, total }: PaginationNavProps) {
    // todo: work out how to behave when on early (or late) pages
    //       currently page 1 displays [-1, 0, 1, 2, 3] for example...

    // tdodo: disable the first / last page buttons they are current.

    let currentPage = Math.ceil(offset / limit);
    currentPage = currentPage === 0 ? 1 : currentPage;
    let numberOfPages = Math.ceil(total / limit);
    numberOfPages = numberOfPages === 0 ? 1 : numberOfPages;

    console.log(`currentPage: ${currentPage}`);
    console.log(`numberOfPages: ${numberOfPages}`);

    const lastPageOffset = numberOfPages * limit;

    const final = [];

    for (let i = currentPage - 3; i < currentPage + 2; i++) {
        const pageNumber = i + 1;
        const pageOffset = pageNumber * limit;
        const disabled = pageNumber === currentPage ? "disabled" : "";
        const pageQueryParameters = `?offset=${pageOffset}&limit=${limit}`

        final.push(
            <li className={`page-item ${disabled}`}>
                <a className="page-link" href={pageQueryParameters}>{pageNumber}</a>
            </li>)
    }

    return (
        <nav>
            <ul className="pagination justify-content-center">
                <li className="page-item">
                    <a className="page-link" href={`?offset=0&limit=${limit}`}>
                        <span>&laquo;</span>
                    </a>
                </li>
                {final}
                <li className="page-item">
                    <a className="page-link" href={`?offset=${lastPageOffset}&limit=${limit}`}>
                        <span>&raquo;</span>
                    </a>
                </li>
            </ul>
        </nav>

    )
}

export default PaginationNav
