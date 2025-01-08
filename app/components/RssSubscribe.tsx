export function RssSubscribe() {
  const rssUrl = 'https://philip30.vercel.app/rss.xml';
  const subscribeLinks = [
    {
      name: 'Feedly',
      url: `https://feedly.com/i/feed/${encodeURIComponent(rssUrl)}`,
      icon: '📱'
    },
    {
      name: 'RSS Feed',
      url: rssUrl,
      icon: '📰'
    },
    {
      name: 'Inoreader',
      url: `https://www.inoreader.com/?add_feed=${encodeURIComponent(rssUrl)}`,
      icon: '📚'
    }
  ];

  return (
    <div className="flex flex-wrap gap-3 mt-4">
      {subscribeLinks.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-700 transition-colors"
        >
          <span>{link.icon}</span>
          {link.name}
        </a>
      ))}
    </div>
  );
} 