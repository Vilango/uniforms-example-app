import SimpleSchema from "simpl-schema";
import { SimpleSchema2Bridge } from "uniforms-bridge-simple-schema-2";
SimpleSchema.extendOptions(["uniforms"]);

export const ListSchema = new SimpleSchema({
  '_listArray': Array,
  '_listArray.$': Object,
  '_listArray.$.zip': String,
  '_listArray.$.city': String,
  '_listArray.$.no': String
});

export const ListBridge = new SimpleSchema2Bridge(
  ListSchema
);
