import { defineConfig } from 'wxt';

// See https://wxt.dev/api/config.html
export default defineConfig({
  manifest: ({ manifestVersion }) => {
    const defaults = {
      name: "Lunaria Diff Viewer",
      description: "Adds diff viewer links to Lunaria dashboards.",
    };

    const mv3 = {
      permissions: [],
      host_permissions: ["*://*/*"],
    };

    const mv2 = {
      permissions: ["*://*/*"],
    };

    return {
      ...defaults,
      ...(manifestVersion === 3 ? mv3 : mv2),
    };
  },
  webExt: {
		startUrls: [
      'https://i18n.docs.astro.build/',
      'https://i18n.starlight.astro.build/',
      'https://i18n.docs.studiocms.dev/',
      'https://mutanuq.netlify.app/lunaria/'
		],
	},
});
