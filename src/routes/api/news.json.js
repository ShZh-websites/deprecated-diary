export function get() {
  const news = [
    {
      date: 'Dec 1, 2021',
      content: '✏️ 毕业设计开始选题，今天开始找老师'
    },
    {
      date: 'Nov 12, 2021',
      content: '🏠 回家修生养息，陪陪亲人',
    },
    {
      date: 'Sept 29, 2021',
      content: '🏫 在武大的最后一学期，且行且珍惜。。。',
    },
  ]
  const body = JSON.stringify(news);

  return { body };
}