import SimpleSchema from "simpl-schema";
import { SimpleSchema2Bridge } from "uniforms-bridge-simple-schema-2";
SimpleSchema.extendOptions(["uniforms"]);

export const AvailableTypesSchema = new SimpleSchema({
  _string: {
    type: String,
    defaultValue: "String"
  },
  _boolean: {
    type: Boolean,
    defaultValue: true,
    uniforms: {
      actionContent: {
        true: "Disable",
        false: "Enable"
      },
      statusContent: {
        true: "enabled",
        false: "disabled"
      },
      text: "This setting is"
    }
  },
  _number: {
    type: SimpleSchema.Integer,
    defaultValue: 5
  },
  _decimal: {
    type: Number,
    defaultValue: 5
  },
  _select: {
    type: String,
    allowedValues: ["draft", "published"],
    defaultValue: "draft",
    // uniforms: {
    //   checkboxes: true
    // }
    // uniforms: {
    //   options: [
    //     { value: "draft", label: "schema opts draft", disabled: true },
    //     { value: "published", label: "schema opts published" }
    //   ]
    // }
  },
  _selectArray: {
    type: Array,
    uniforms: {
      checkboxes: true
    }
  },
  "_selectArray.$": {
    type: String,
    allowedValues: ["draft", "published"],
  }
});

export const AvailableTypesBridge = new SimpleSchema2Bridge(
  AvailableTypesSchema
);
