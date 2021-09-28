import './App.css';

function App() {
    const name = 'React';
    const style = {
        backgroundColor: 'balck',
        color: 'aqua',
        fontSize: '48px',
        fontWeight: 'bold',
        padding: 16,
    };
    return <div style={style}>{name}</div>;
}

export default App;
