import ListForm from "./Form";

const NewEntry = (props) => {
    const saveEntryDataHandler = (enteredEntryData) => {
        const entryData = {
            ...enteredEntryData,
            id: Math.random().toString()
        };

        props.onAddEntry(entryData);
    };

    return <div>
        <ListForm onSaveEntryData= {saveEntryDataHandler} />
    </div>
};

export default NewEntry;