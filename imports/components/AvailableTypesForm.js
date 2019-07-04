import React, { useState } from "react";
import {
  AutoForm,
  AutoField,
  TextField,
  SubmitField,
  ErrorsField
} from "uniforms-polaris";

import { AvailableTypesBridge } from "./AvailableTypesSchema";
import { FormLayout } from "@shopify/polaris";
import { Select } from "@shopify/polaris";

export const AvailableTypesForm = ({ onSubmit }) => {
  const model = { title: "xxxx" };
  // const model = {};
  console.log("SimpleForm", AvailableTypesBridge);
  return (
    <React.Fragment>
      <AutoForm
        schema={AvailableTypesBridge}
        onSubmit={onSubmit}
        model={model}
        showInlineError={true}
      >
        <AutoField
          name="_select"
          helpText="Helper"
          // labelInline
          // disabled
          checkboxes
        />
        <AutoField
          name="_select"
          helpText="Helper DISABLED"
          disabled
          checkboxes
        />


        <AutoField
          name="_select"
          helpText="Helper DISABLED"
          placeholder=""
        />
        <AutoField
          name="_select"
          helpText="Helper DISABLED"
          disabled
          //checkboxes
        />
        <AutoField
          name="_select"
          helpText="Helper"
          options={[
            {
              value: "draft",
              label: "Draft!",
              helpText: "Somehelptext",
              disabled: true
            },
            {
              value: "published",
              helpText: "Another important helper text!",
              label: "Published"
            }
          ]}
        />
        <AutoField
          name="_select"
          helpText="Helper"
          options={[
            {
              title: "G1",
              options: [
                {
                  value: "draft",
                  label: "Draft!",
                  helpText: "Somehelptext",
                  disabled: true
                },
                {
                  value: "published",
                  helpText: "Another important helper text!",
                  label: "Published"
                }
              ]
            }
          ]}

        />

        <AutoField name="_selectArray" helpText="Helper" />

        <AutoField name="_string" helpText="Helper" />
        <AutoField name="_boolean" helpText="Helper" />
        <AutoField name="_number" helpText="Helper" />
        <AutoField name="_decimal" helpText="Helper" />

        <SubmitField label="Save" />
        <ErrorsField />
      </AutoForm>
      {/* <Select
        label="Sort by"
        labelInline
        error={null}
        id={"id"}
        name={"name"}
        disabled={false}
        placeholder={""}
        helpText={"helpText"}
        onChange={() => console.log("hello")}
        options={[
          { value: "draft", label: "Draft!", helpText: "Somehelptext" },
          {
            value: "published",
            helpText: "Another important helper text!",
            label: "Published"
          }
        ]}
      /> */}
    </React.Fragment>
  );
};
