function TestModal() {
    return (
        <div>
            <div className="mb-3">
                <label htmlFor="emailAddressInput" className="form-label">name</label>
                <input className="form-control" id="emailAddressInput" placeholder="John Doe" />
            </div>

            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-cy="launch-demo-modal-button">
                Launch demo modal
            </button>

            {/* tabindex="-1" */}
            <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel" data-cy="demo-modal-title">Modal title</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            ...
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" data-cy="demo-modal-close-button">Close</button>
                            <button type="button" className="btn btn-primary" data-cy="demo-modal-submit-button">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TestModal