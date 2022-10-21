export default function DescriptionBox(props) {

    if(props.userInput == ''){
        return
    }else{
    return(
        <>
            <div className="mb-3">
                <label  className="form-label">Description</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
        </>
    );
    }
}