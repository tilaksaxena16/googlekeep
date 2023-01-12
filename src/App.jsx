import React, { useState } from "react";
import { Header } from "./Googlekeep/Header";
import { Footer } from "./Googlekeep/Footer";
import { CreateNote } from "./Googlekeep/CreateNote";
import { Note } from "./Note";

const App = () => {

  const [addItem, setAddItem] = useState([]);


  const addNote = (note) => {

    setAddItem((prevData) => {

      return [...prevData, note];

    });
  };

  const onDelete = (id) => {
    setAddItem((olddata) =>
      olddata.filter((currdata, indx) => {
        return indx !== id;
      })
    );
  };


  return (
    <>
      <Header />
      <CreateNote passnote={addNote} />

      {addItem.map((val, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={val.title}
            content={val.content}
            deleteItem={onDelete}
          />
        );
      })}

      <Footer />
    </>
  );
};

export { App };