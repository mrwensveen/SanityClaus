/**
 * Sanity CLI Configuration
 * This file configures the Sanity CLI tool with project-specific settings
 * and customizes the Vite bundler configuration.
 * Learn more: https://www.sanity.io/docs/cli
 */

import {defineCliConfig} from 'sanity/cli'

const projectId = process.env.SANITY_STUDIO_PROJECT_ID || '<your project ID>'
const dataset = process.env.SANITY_STUDIO_DATASET || 'production'

export default defineCliConfig({
  api: {
    projectId,
    dataset,
  },
  autoUpdates: true,
  deployment: {
    appId: 'ep9gdafxof83gliwlcbtrloq',
  },
  typegen: {
    path: '../sveltekit-app/src/**/*.{ts,tsx,js,jsx}',        // adjust to match your app
//    schema: './schema.json',                   // or your extracted path
    generates: '../sveltekit-app/src/lib/sanity/sanity.types.ts',
//    overloadClientMethods: true,
  },
})
