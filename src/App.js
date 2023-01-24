import Accordion from "./components/Accordion";

function App() {
    const items = [
        {
            id:'dafgdgds',
            label: 'Can I use  React on a project?',
            content: 'You can use react on any project you want You can use react on any project you want You can use react on any project you want'
        },
        {
            id:'sadsdiwdasd',
            label:'Can I use Javascript on a project?',
            content: 'You can use react on any project you want You can use react on any project you want You can use react on any project you want'
        },
        {
            id: 'dsaodoejkd',
            label:'Can i use CSS on a project?',
            content: 'You can use react on any project you want You can use react on any project you want You can use react on any project you want'
        }
    ]
    
    
    return <Accordion items = {items} />;
}

export default App;