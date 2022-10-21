export default function Footer() {
    return (
        <>
                    {/* Footer */}
            <div className="container ">
                <div className="card-footer text-muted row justify-content-around">
                        <div className="col-2">
                            <p className='m-0 '>Total Items #</p>
                        </div>
                    <button type="button" className="btn btn-danger col-2">Clear All</button>
                </div>
            </div>
        
        </>
    );
}