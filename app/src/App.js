export default function App() {

    function createNewItem(key, value) {
        localStorage.setItem(key,value)
    }


return (
    <>
        <h1>Hello</h1>
        <button onClick={() => {createNewItem('hey','jude')}}>createNewItem</button>
    </>
);
}