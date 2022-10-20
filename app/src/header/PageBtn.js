export default function PageBtn(props) {

    function btnState(state) {
        if(props.page.pageCurrent == state){
            return 'nav-link active'
        }else{
            return 'nav-link disabled'
        }
    }
    
    return(
        <>
            <div className="card-header">
                <ul className="nav nav-tabs card-header-tabs">
                    <li className="nav-item" type="button" onClick={() => {
                        props.setPage({...props.page, pageCurrent: 'Active'})
                        }}>
                        <a className={btnState('Active')}  aria-current="true" >Active</a>
                    </li>
                    <li className="nav-item" type="button" onClick={() => {
                        props.setPage({...props.page, pageCurrent: 'Complete'})
                        }}>
                        <a className={btnState('Complete')} aria-current="true" >Complete</a>
                    </li>
                    <li className="nav-item" type="button" onClick={() => {
                        props.setPage({...props.page, pageCurrent: 'All'})
                        }}>
                        <a className={btnState('All')} aria-current="true" >All</a>
                    </li>

                </ul>
            </div>
        </>
    );
}