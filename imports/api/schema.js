import SimpleSchema from "simpl-schema";
import { SimpleSchema2Bridge } from "uniforms-bridge-simple-schema-2";
SimpleSchema.extendOptions(["uniforms"]);

export const BlogPostSchema = new SimpleSchema({
  title: {
    type: String,
    uniforms: {
      helperText: "SSSSSS",
    }
  },
  authorName: {
    type: String,
    optional: true
  },
  content: {
    type: String,
    min: 10,
    uniforms: {
    }
  }
});

export const BlogPostBridge = new SimpleSchema2Bridge(BlogPostSchema);

export const SelectComponentSchema = new SimpleSchema({
  status: {
    type: String,
    allowedValues: ['draft', 'published'],
    defaultValue: 'draft'
  },
  settingToggle: {
    type: Boolean,
    defaultValue: true,
    uniforms: {
      actionContent: {
        true: 'Disable',
        false: 'Enable'
      },
      statusContent: {
        true: 'enabled',
        false: 'disabled'
      },
      text: 'This setting is'
    }
  }
});

export const SelectComponentBridge = new SimpleSchema2Bridge(SelectComponentSchema);
