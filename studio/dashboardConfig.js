export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nuxt-events'
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
                  buildHookId: '',
                  title: 'Sanity Studio',
                  name: 'safe-sanity-demo-studio',
                  apiId: 'bdf4342a-37a8-4a67-90bd-270b8c3f3f53'
                },
                {
                  buildHookId: '6204d5d9605beb9b5018d08f',
                  title: 'Events Website',
                  name: 'safe-sanity-demo',
                  apiId: '711f9629-4e99-4af0-868e-ace757768780'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/safejace/safe-sanity-demo',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://safe-sanity-demo.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently created sessions', order: '_createdAt desc', types: ['session']},
      layout: {width: 'medium'}
    }
  ]
}
