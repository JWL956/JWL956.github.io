// 注入自定义毛玻璃样式到每个页面的 head 中
hexo.extend.filter.register('after_render:html', function (html) {
  const cssLink = '<link rel="stylesheet" href="/css/glass.css">';
  if (html.indexOf('glass.css') === -1) {
    return html.replace('</head>', cssLink + '\n</head>');
  }
  return html;
});
