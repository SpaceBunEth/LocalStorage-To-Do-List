import PageBtn from "./PageBtn";
import UserInput from "./UserInput";

export default function Header(props) {
    
    return (
        <>
                {/* Header */}
        <div className="card-header">
            <h3>To-Do List</h3>
        </div>

        <UserInput 
            items={props.items} 
            setItems={props.setItems} 
            userInput={props.userInput} 
            setUserInput={props.setUserInput}
        />

        <PageBtn page={props.page} setPage={props.setPage}/>



        </>
    );
}