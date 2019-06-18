import React from "react";
import {
  AutoForm,
  SubmitField,
  ErrorsField,
  SelectField,
  SettingToggleField
} from "uniforms-polaris";

import { SelectComponentBridge } from "/imports/api/schema";

export const SelectComponentForm = ({ onSubmit }) => {
    const model = { };
    console.log("SimpleForm", SelectComponentBridge);
    return (
      <React.Fragment>
        <AutoForm
          schema={SelectComponentBridge}
          onSubmit={onSubmit}
          model={model}
          showInlineError
        >
          <SelectField key={"status"} name="status" />
          <SettingToggleField name="settingToggle" />
  
          <SubmitField label="Save" />
          <ErrorsField />
        </AutoForm>
      </React.Fragment>
    );
  };