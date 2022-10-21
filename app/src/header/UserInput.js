import DescriptionBox from "./DescriptionBox";

export default function UserInput(props) {
    

    function newItem() {
        
        const item = {
            id: `item_${props.userInput}${props.items.length}`, // key id for html element
            title: props.userInput, // title for to-do
            description: 'nothing', // description for to-do
            status: 'Active', // completed, active, deleted
            display: true, //true or false boolean
            timeCreated: '', //date time obj string
            timeUpdated: '', //date time obj string
            timeCompleted: '', //date time obj string
        }

        return item
    }
    
    
    return(
        <>
            <div className="card-header">
                <div className="row justify-content-center">
                    <div className="input-group w-50">
                        <input 
                            onChange={(e)=>{
                                props.setUserInput(e.target.value)
                                
                            }}
                            type="text" 
                            value={props.userInput}
                            className="form-control" 
                            placeholder="Item Title..." 
                            aria-label="Recipient's username" 
                            aria-describedby="basic-addon2"
                        />
                        <button 
                            onClick={()=>{
                                props.setUserInput('')
                                
                                if(props.userInput !== ''){
                                    props.setItems([...props.items, newItem()])
                                }
                                
                            }}
                            className="input-group-text" 
                            id="basic-addon2" >
                                Create Item
                        </button>
                    </div>
                </div>
                
                {/* Description box for User */}
                <DescriptionBox userInput={props.userInput}/>


            </div>
        </>
    );
}