export default defineAppConfig({
  title: 'Ezen.Work',
  email: 'info@ezen.work',
  github: 'https://github.com/miantiao-me/sink',
  twitter: 'https://sink.cool/kai',
  telegram: 'https://sink.cool/telegram',
  mastodon: 'https://sink.cool/mastodon',
  blog: 'https://ezen.work',
  description: 'A simple short link generator for OutdoorRouter and EzenNetwork. Powered by Sink and operates securely on CloudFlare.',
  image: 'https://sink.cool/banner.png',
  previewTTL: 300, // 5 minutes
  slugRegex: /^[a-z0-9]+(?:-[a-z0-9]+)*$/i,
  reserveSlug: [
    'dashboard',
  ],
})
