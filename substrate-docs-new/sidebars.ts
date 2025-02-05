const sidebars = {
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Deploy',
      items: [
        'deploy/index',
        'deploy/prepare-to-deploy',
        'deploy/deployment-options',
      ],
    },
    {
      type: 'category',
      label: 'Tutorials',
      items: [
        {
          type: 'category',
          label: 'Build a Blockchain',
          items: ['tutorials/build-blockchain/build-local-blockchain'],
        },
      ],
    },
  ],
};

module.exports = sidebars;