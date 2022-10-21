import React from 'react'
import Header from "./header/Header";
import Main from "./main/Main";
import Footer from "./footer/Footer";

export default function App() {
    // Parse local state then assign values from stringify JSON to obj
    const objPage = {
        pageCurrent: 'Active',
        pageStates: ['Active','Complete','All'],
        totalItems: 0
    }
    // obj structure for items created in to-do list
    const item = {
        id: '', // key id for html element
        title: '', // title for to-do
        description: '', // description for to-do
        status: '', // completed, active, deleted
        display: '', //true or false boolean
        timeCreated: '', //date time obj string
        timeUpdated: '', //date time obj string
        timeCompleted: '', //date time obj string
    }


    const [page, setPage] = React.useState(objPage)
    const [items, setItems] = React.useState([])// Parsed .JSON localStorage
    const [pagin, setPagin] = React.useState(0)
    const [userInput, setUserInput] = React.useState('')



return (
    <>
        <div className="card text-center mt-5 min-h-50 position-absolute top-0 start-50 translate-middle-x w-75">
            <Header 
                items={items} 
                setItems={setItems} 
                page={page} 
                setPage={setPage} 
                userInput={userInput} 
                setUserInput={setUserInput}
                />
            <Main items={items} setItems={setItems} page={page} setPage={setPage}/>
            <Footer page={page} setItems={setItems}/>
        </div>
    </>
);
}
