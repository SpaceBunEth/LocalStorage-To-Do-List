export default function Item(props) {
    //console.log('Item',props)

    const filterArr = props.items.filter((x) => {
        if(props.page.pageCurrent === 'All'){
            return x
        }
        if(x.status === props.page.pageCurrent){
            return x
        }else{
            return 
        }
    })

    // function disCheckBtn(){
    //     if()
    // }

    const mapArr = filterArr.map((x,i) => {

        return (
            <div className="card m-2" key={x.id}>
                <div className="card-body p-0">
                <div className="row justify-content-around p-1">
                    <div 
                        onClick={()=>{
                            
                            props.setItems(props.items.map(y => y.id === x.id ? { ...y, status: 'Complete' } : y))
                            

                        }}

                        className='col-3 link-success' 
                        type="button" 
                        >
                            
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-check-square-fill " viewBox="0 0 16 16">
                        <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm10.03 4.97a.75.75 0 0 1 .011 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.75.75 0 0 1 1.08-.022z"/>
                    </svg>
                    
                    </div>
                    <p className="col-3 m-0">{x.title}</p>

                    <div className="dropdown col-1">
                    <a className="link-secondary" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                    <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                    </svg>
                    </a>

                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">Description</a></li>
                        <li><a className="dropdown-item" href="#">Edit</a></li>
                        <li><a className="dropdown-item text-danger" href="#">Delete</a></li>
                    </ul>
                    </div>


                    <div className='col-3 link-danger' type="button">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-x-square-fill" viewBox="0 0 16 16">
                        <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708z"></path>
                        </svg>
                    </div>

                    </div>
                </div>
            </div>
        );
    
    })
    

    return(
        <div>{mapArr}</div>
        
        // <>
        //     <div className="card">
        //         <div className="card-body p-0">
        //         <div className="row justify-content-around p-1">
        //             <div className='col-3 link-success' type="button">
        //             <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-check-square-fill " viewBox="0 0 16 16">
        //                 <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm10.03 4.97a.75.75 0 0 1 .011 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.75.75 0 0 1 1.08-.022z"/>
        //             </svg>
                    
        //             </div>
        //             <p className="col-3 m-0">Text about To-Do item:</p>

        //             <div className="dropdown col-1">
        //             <a className="link-secondary" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        //             <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-three-dots-vertical" viewBox="0 0 16 16">
        //             <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
        //             </svg>
        //             </a>

        //             <ul className="dropdown-menu">
        //                 <li><a className="dropdown-item" href="#">Description</a></li>
        //                 <li><a className="dropdown-item" href="#">Edit</a></li>
        //                 <li><a className="dropdown-item text-danger" href="#">Delete</a></li>
        //             </ul>
        //             </div>


        //             <div className='col-3 link-danger' type="button">
        //                 <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-x-square-fill" viewBox="0 0 16 16">
        //                 <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708z"></path>
        //                 </svg>
        //             </div>

        //             </div>
        //         </div>
        //     </div>
        // </>
    );
}