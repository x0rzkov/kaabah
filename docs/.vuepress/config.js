module.exports = {
  base: '/kaabah/',
  title: 'Kaabah',
  description: 'A Terraform solution to build and operate Docker Swarm infrastructures',
  head: [
    ['link', { rel: 'icon', href: `https://s3.eu-central-1.amazonaws.com/kalisioscope/kalisio/kalisio-icon-64x64.png` }],
    ['link', { rel: 'manifest', href: '/manifest.json' }]
  ],
  serviceWorker: false,
  theme: 'kalisio',
  themeConfig: {
    docsDir: 'docs',
    nav: [
      {
        text: 'What is it ?',
        link: '/what-is-it/',
      },
      {
        text: 'How doest it work ?',
        link: '/how-does-it-work/'
      },
      {
        text: 'How to use it ?',
        items: [
          { text: 'Getting started', link: '/how-to-use-it/getting-started.md' },
          { text: 'Tips', link: '/how-to-use-it/tips' }
        ]
      },
      {
        text: 'License',
        link: '/license/'
      },
      {
        text: 'GitHub',
        link: 'https://github.com/kalisio/kaabah'
      }
    ]
  }
}