import Item from './Item'

export default function Main(props) {
    return (
        <>
                    {/* Main */}
        <div className="card-body ">
        <h5 className="card-title">List of To-Do Items</h5>
        <hr/>
        <Item items={props.items} page={props.page} setItems={props.setItems}/>
        
        </div>

        </>
    );
}