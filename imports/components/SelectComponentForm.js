import React from "react";
import {
  AutoForm,
  SubmitField,
  ErrorsField,
  SelectField
} from "uniforms-polaris";

import { SelectComponentBridge } from "/imports/api/schema";

export const SelectComponentForm = ({ onSubmit }) => {
    const model = { };
    // const model = {};
    console.log("SimpleForm", SelectComponentBridge);
    return (
      <React.Fragment>
        <AutoForm
          schema={SelectComponentBridge}
          onSubmit={onSubmit}
          model={model}
          showInlineError={true}
        >
          <SelectField key={"status"} name="status" />
  
          <SubmitField label="Save" />
          <ErrorsField />
        </AutoForm>
      </React.Fragment>
    );
  };