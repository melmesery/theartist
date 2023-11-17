import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';
import schemas from "./sanity/schemas";

const config = defineConfig({
  name: 'default',
  title: 'Artistic Studio',
  projectId: 'ixlapp6t',
  dataset: 'production',
  apiVersion: "2023-11-17",
  basePath: "/admin",
  plugins: [deskTool(), visionTool()],
  schema: {
    types: schemas,
  },
})

export default config;