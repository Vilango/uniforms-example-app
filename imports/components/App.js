import React, { useState } from "react";
import { AppProvider, Page, Card, Tabs } from "@shopify/polaris";
import {
  AutoForm,
  AutoField,
  TextField,
  SubmitField,
  ErrorsField
} from "uniforms-polaris";

import { BlogPostBridge } from "/imports/api/schema";
import { Form, FormLayout } from "@shopify/polaris";
import { SelectComponentForm } from "./SelectComponentForm";
import { AvailableTypesForm } from "./AvailableTypesForm";
import { ListForm } from "./ListForm";
import { ParticipationList } from "./ParticipationList";
import { ParticipationAdd } from "./ParticipationAdd";

// import SimpleForm from "./SimpleForm";
// import CustomForm from "./CustomForm";

const SimpleForm = ({ onSubmit }) => {
  const model = { title: "xxxx" };
  // const model = {};
  console.log("SimpleForm", BlogPostBridge);
  return (
    <React.Fragment>
      <AutoForm
        schema={BlogPostBridge}
        onSubmit={onSubmit}
        model={model}
        showInlineError={true}
      >
        <AutoField key={"title"} name="title" helperText="Helper" />

        <div>
          <div>
            <div>
              <AutoField name="title" helperText="Helper" />
            </div>
          </div>
        </div>

        <FormLayout _={Math.random()}>
          <AutoField name="title" helperText="Helper" />
        </FormLayout>

        <FormLayout >
          <AutoField name="title" helperText="Helper" />
        </FormLayout>

        <SubmitField label="Save" />
        <ErrorsField />
      </AutoForm>
    </React.Fragment>
  );
};
const CustomizedForm = ({ onSubmit }) => {
  const model = {};
  console.log("CustomizedForm", BlogPostBridge);

  return (
    <AutoForm
      schema={BlogPostBridge}
      onSubmit={onSubmit}
      model={model}
      showInlineError={true}
    />
  );
};
const PopulatedForm = () => {
  return <div>PopulatedForm</div>;
};

export const App = () => {
  const [selected, setSelected] = useState(1);
  const [result, setResult] = useState("");

  const tabs = [
    {
      id: "simple-form",
      content: "Simple Form",
      panelID: "simple-form-content",
      component: SimpleForm
    },
    {
      id: "list-form",
      content: "List Form",
      panelID: "list-form-content",
      component: ListForm
    }, 
    {
      id: "participation-list-form",
      content: "Participation List Form",
      panelID: "participation-list-form-content",
      component: ParticipationList
    }, 
    {
      id: "participation-add-form",
      content: "Participation Add Form",
      panelID: "participation-add-form-content",
      component: ParticipationAdd
    },    
    {
      id: "available-types-form",
      content: "AvailableTypesForm",
      panelID: "available-types-form-content",
      component: AvailableTypesForm
    },
    {
      id: "customized-form",
      content: "Customized Form",
      panelID: "customized-form-content",
      component: CustomizedForm
    },
    {
      id: "populated-form",
      content: "Populated Form",
      panelID: "populated-form-content",
      component: PopulatedForm
    },
    {
      id: "selectcomponent-form",
      content: "Form with select field",
      panelID: "form-with-select-field",
      component: SelectComponentForm
    }
  ];
  const Comp = tabs[selected].component;
  return (
    <AppProvider>
      <Page>
        <Card>
          <Tabs tabs={tabs} selected={selected} onSelect={setSelected}>
            <Card.Section title={tabs[selected].content}>
              <Comp
                onSubmit={data => {
                  console.log("onSubmit", data);
                  setResult(data);
                }}
              />
            </Card.Section>
          </Tabs>
        </Card>
        <Card>{JSON.stringify(result)}</Card>
      </Page>
    </AppProvider>
  );
};
