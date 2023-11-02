import { useState } from "react";
import "./Form.css";

const ListForm = (props) => {

    const [enteredTitle, setEnteredTitle] = useState('');
    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    }

    const [enteredFamily, setEnteredFamily] = useState('');
    const familyChangeHandler = (event) => {
        setEnteredFamily(event.target.value);
    }

    const [enteredExemple, setEnteredExemple] = useState('');
    const exempleChangeHandler = (event) => {
        setEnteredExemple(event.target.value);
    }

    const [enteredDescription, setEnteredDescription] = useState('');
    const descriptionChangeHandler = (event) => {
        setEnteredDescription(event.target.value);
    }

    const [enteredLinkDoc, setEnteredLinkDoc] = useState('');
    const linkDocChangeHandler = (event) => {
        setEnteredLinkDoc(event.target.value);
    }

    const [enteredTitleDoc, setEnteredTitleDoc] = useState('');
    const titleDocChangeHandler = (event) => {
        setEnteredTitleDoc(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const entryData = {
            family: enteredFamily,
            title: enteredTitle,
            snippet: enteredExemple,
            description: enteredDescription,
            documentation_link: enteredLinkDoc,
            documentation_title : enteredTitleDoc,
        }

        props.onSaveEntryData(entryData);
        setEnteredTitle('');
        setEnteredFamily('');
        setEnteredExemple('');
        setEnteredDescription('');
        setEnteredLinkDoc('');
        setEnteredTitleDoc('');
    }

    return <form className="new-entry-form" onSubmit={submitHandler}>
        <div className="form-title">
            <label>Title</label>
            <input type='text' value={enteredTitle} onChange={titleChangeHandler} />

            <label>family</label>
            <select id="families" name="families" value={enteredFamily} onChange={familyChangeHandler}>
                <option className="option-react" value="react">React</option>
                <option className="option-js" value="js">JavaScript/JQuery</option>
                <option className="option-css" value="css">CSS</option>
                <option className="option-wordpress" value="wordpress">Wordpress</option>
                <option className="option-php" value="php">PHP</option>
            </select>

        </div>
        <div className="form-exemple">
            <label>Exemple</label>
            <input type='text' value={enteredExemple} onChange={exempleChangeHandler} />
        </div>
        <div className="form-description">
            <label>Description</label>
            <input type='text' value={enteredDescription} onChange={descriptionChangeHandler} />
        </div>
        <div className="form-documentation">
            <label>Link documentation</label>
            <input type='text' value={enteredLinkDoc} onChange={linkDocChangeHandler} />

            <label>Title documentation</label>
            <input type='text' value={enteredTitleDoc} onChange={titleDocChangeHandler}/>
        </div>
        <div>
            <button type="submit">Add</button>
        </div>
    </form>
}

export default ListForm;