import React, { useState } from "react";
import {
  AutoForm,
  AutoField,
  SubmitField,
  ErrorsField,
  SelectField
} from "uniforms-polaris";
import { TextField, Select } from "@shopify/polaris";

import { ListBridge } from "./ListSchema";
import connectField from "uniforms/connectField";

export const ParticipationAdd = ({ onSubmit }) => {
  const model = {
    _listArray: [{ zip: "1010", city: "Vienna" }, { zip: "8010", city: "Graz" }]
  };
  // const model = {};
  console.log("ListForm", ListBridge);

  return (
    <React.Fragment>
      <AutoForm
        schema={ListBridge}
        onSubmit={onSubmit}
        model={model}
        showInlineError
      >
        <ListItems name="_listArray" />
        <ListItemAdd name="_listArray" />
      </AutoForm>
    </React.Fragment>
  );
};

const ListItemsBare = ({ onChange, value }) => {
  console.log("ListItemsBare", value);
  if (!Array.isArray(value)) {
    return <div>Not an array passed: {value} </div>;
  }

  return (
    <div>
      {value.map(row => {
        return (
          <div key={row.zip}>
            {row.zip} | {row.city} | {row.no} (x)
          </div>
        );
      })}
    </div>
  );
};
const ListItems = connectField(ListItemsBare);

const ListItemAddBare = ({ onChange, value }) => {
  const [participationNo, setParticipationNo] = useState();
  const [selectedParticipation, setSelectedParticipation] = useState();

  console.log("ListItemAddBare", value);
  if (!Array.isArray(value)) {
    return <div>Not an array passed: {value} </div>;
  }

  const usedZips = value.map(row => row.zip);
  const zips = ["8010", "1010", "2020"];
  const unusedZipCodes = zips.filter(x => !usedZips.includes(x));

  const addParticipation = () => {
    console.log("participationNo", participationNo);
    console.log("selectedParticipation", selectedParticipation);
    const newValue = value.map(val => val.zip === selectedParticipation? ({...val, no: participationNo }): val)
    console.log(newValue);
    setSelectedParticipation(undefined);
    onChange(newValue);
  };

  const options = value.filter(val => !val.no).map(val => ({ label: val.zip, value: val.zip }));

  console.log("unusedZipCodes", unusedZipCodes, usedZips);
  return (
    <div>
      <TextField
        label="Participation Number"
        value={participationNo}
        onChange={value => setParticipationNo(value)}
      />
      <Select
        label="Participations"
        placeholder=" "
        options={options}
        value={selectedParticipation}
        onChange={value => setSelectedParticipation(value)}
      />
      <button onClick={() => addParticipation()}>
        add
      </button>
    </div>
  );
};
const ListItemAdd = connectField(ListItemAddBare);
