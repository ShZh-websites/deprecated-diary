export function get() {
  const news = [
    {
      date: 'Jan 15, 2022',
      content: '🎯 开始着手我T0级别难度的毕业设计'
    },
    {
      date: 'Jan 1, 2022',
      content: '🎆 新的一年到啦！祝大家新年快乐！'
    },
    {
      date: 'Dec 1, 2021',
      content: '✏️ 毕业设计开始选题，今天开始找老师'
    },
    {
      date: 'Nov 12, 2021',
      content: '🏠 回家修生养息（摸鱼），陪陪亲人'
    },
    {
      date: 'Sept 29, 2021',
      content: '🏫 在武大的最后一学期，且行且珍惜。。。'
    }
  ];
  const body = JSON.stringify(news);

  return { body };
}
