export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e07f51a6855a3dcfdd87bef',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-k3ch49g5',
                  apiId: 'fcdd4139-d325-4724-8989-beac7400111c'
                },
                {
                  buildHookId: '5e07f51a1e8eae758b254378',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-ng22bwjt',
                  apiId: '134227d9-507a-4ffa-8014-e9fc4ca318fc'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/elmarnaliyev/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-ng22bwjt.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
