import React, { useState } from "react";
import {
  AutoForm,
  AutoField,
  TextField,
  SubmitField,
  ErrorsField
} from "uniforms-polaris";

import { ListBridge } from "./ListSchema";
import connectField from 'uniforms/connectField';


export const ListForm = ({ onSubmit }) => {
  const model = { _listArray: [{zip: "1010", city: "Vienna"}, {zip: "8010", city: "Graz"}] };
  // const model = {};
  console.log("ListForm", ListBridge);
  return (
    <React.Fragment>
      <AutoForm
        schema={ListBridge}
        onSubmit={onSubmit}
        model={model}
        showInlineError={true}
      >
        <ListItems name="_listArray" />
        <ListItemAdd name="_listArray" />

        {/* <AutoField
          name="_listArray"
        /> */}

      </AutoForm>
    </React.Fragment>
  );
};


const ListItemsBare = ({ onChange, value }) => {
  console.log("ListItemsBare", value);
  if (!Array.isArray(value)) {
    return <div>Not an array passed: {value} </div>
  }

  return (
    <div >
      {value.map((row)=> {
        return <div key={row.zip}>{row.zip} | {row.city} (x)</div>
      })}
    </div>
  );
}
const ListItems = connectField(ListItemsBare);


const ListItemAddBare = ({ onChange, value }) => {
  console.log("ListItemAddBare", value);
  if (!Array.isArray(value)) {
    return <div>Not an array passed: {value} </div>
  }

  const usedZips = value.map((row) => row.zip);
  const zips = ["8010", "1010", "2020"];
  const unusedZipCodes = zips.filter(x => !usedZips.includes(x));

  if (unusedZipCodes.length === 0) {
    return <div>All zip codes used!</div>
  }

  console.log("unusedZipCodes", unusedZipCodes, usedZips);
  return (
    <div>
      unusedZipCodes:  {unusedZipCodes.join(", ")}
      <button onClick={()=> {
        value.push({zip: "2020", city: "Somewhere"})
        console.log("ListItemAddBare value", value);
        onChange(value);
      }}></button>
    </div>
  );
}
const ListItemAdd = connectField(ListItemAddBare);