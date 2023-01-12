import React, { useState } from "react";
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

const CreateNote = (props) => {

    const [expand, setExpand] = useState(false);

    const [note, setNote] = useState({
        title: "",
        content: "",
    });

    const InputEvent = (event) => {

        const { name, value } = event.target;

        setNote((prevData) => {
            return {
                ...prevData,
                [name]: value,
            };
        });
    };

    const addEvent = () => {

        props.passnote(note);
        setNote({
            title: "",
            content: "",
        });
    };

    const expandIt = () => {
        setExpand(true);
    };

    const btoNormal = () => {
        setExpand(false);
    };

    return (
        <>
            <div className="main_note" onDoubleClick={btoNormal}>
                <form>
                    {expand ?
                        <input
                            type="text"
                            value={note.title}
                            name="title"
                            placeholder="Title"
                            onChange={InputEvent}
                            autoComplete="off"
                        /> : null}

                    <textarea
                        rows="" column=""
                        value={note.content}
                        name="content"
                        onChange={InputEvent}
                        placeholder="Write a note..."
                        onClick={expandIt}>
                    </textarea>

                    {expand ?
                        <Button onClick={addEvent}>
                            <AddIcon className="plus_sign" />
                        </Button> : null}
                </form>
            </div>
        </>
    );
};

export { CreateNote };
