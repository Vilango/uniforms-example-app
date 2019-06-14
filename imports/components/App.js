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

        <FormLayout>
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
  const [selected, setSelected] = useState(3);
  const [result, setResult] = useState("");

  const tabs = [
    {
      id: "simple-form",
      content: "Simple Form",
      panelID: "simple-form-content",
      component: SimpleForm
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

// export default class App extends React.Component {
//   state = {
//     selectedTab: "simpleForm",
//     modalData: null
//   };

//   openTab = selectedTab => this.setState({ selectedTab });

//   onSubmit = data => {
//     // You can do anything with this data,
//     // send it to the server using Meteor.call, invoke GraphQL mutation or just display in a modal :)
//     this.setState({ modalData: data });
//   };

//   closeModal = () => this.setState({ modalData: null });

//   render() {
//     const { selectedTab, modalData } = this.state;
//     return (
//       <Grid verticalAlign="middle" centered className="app-container">
//         <Grid.Column width={8}>
//           <Header as="h2">Simple uniforms demo</Header>
//           <Segment>
//             <Menu pointing secondary>
//               {["simpleForm", "customizedForm", "FormPopulatedWithData"].map(
//                 tab => (
//                   <Menu.Item
//                     key={tab}
//                     name={tab}
//                     active={tab === selectedTab}
//                     onClick={() => this.openTab(tab)}
//                   />
//                 )
//               )}
//             </Menu>

//             {/* Not very elegant but simple and working tabs system */}
//             {selectedTab === "simpleForm" && (
//               <SimpleForm schema={BlogPostSchema} onSubmit={this.onSubmit} />
//             )}
//             {selectedTab === "customizedForm" && (
//               <CustomForm schema={BlogPostSchema} onSubmit={this.onSubmit} />
//             )}
//             {selectedTab === "FormPopulatedWithData" && (
//               <CustomForm
//                 schema={BlogPostSchema}
//                 onSubmit={this.onSubmit}
//                 model={{
//                   title: "Example blog post",
//                   content:
//                     "This could be a blog post edit form, populated with current data from DB",
//                   author: "John Doe",
//                   status: "published"
//                 }}
//               />
//             )}
//           </Segment>

//           <Modal
//             open={!!modalData}
//             onClose={this.closeModal}
//             header="Data submitted!"
//             content={
//               <Modal.Content>
//                 <pre>{JSON.stringify(modalData, null, 4)}</pre>
//               </Modal.Content>
//             }
//             actions={[
//               {
//                 key: "ok",
//                 content: "Ok",
//                 color: "blue",
//                 onClick: this.closeModal
//               }
//             ]}
//           />
//         </Grid.Column>
//       </Grid>
//     );
//   }
// }
