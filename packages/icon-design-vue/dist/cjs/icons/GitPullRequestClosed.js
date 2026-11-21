'use strict';

const { defineComponent, h } = require('vue');

const GitPullRequestClosed = defineComponent({
  name: 'GitPullRequestClosed',
  props: {
    size: { type: [Number, String], default: 24 },
    color: { type: String, default: 'currentColor' },
    strokeWidth: { type: [Number, String], default: 1.5 }
  },
  setup(props) {
    return () =>
      h(
        'svg',
        {
          xmlns: 'http://www.w3.org/2000/svg',
          width: props.size,
          height: props.size,
          viewBox: '0 0 24 24',
          fill: 'none',
          stroke: props.color,
          'stroke-width': props.strokeWidth,
          'stroke-linecap': 'round',
          'stroke-linejoin': 'round',
          class: 'icon-design'
        },
        [
          h('path', {"d":"M17.063 15C18.719 15 20.063 16.344 20.063 18C20.063 19.656 18.719 21 17.063 21C15.406 21 14.063 19.656 14.063 18C14.063 16.344 15.406 15 17.063 15Z"}),
          h('path', {"d":"M6 9C4.344 9 3 7.656 3 6C3 4.344 4.344 3 6 3C7.656 3 9 4.344 9 6C9 7.656 7.656 9 6 9Z"}),
          h('path', {"d":"M6 9L6 21"}),
          h('path', {"d":"M17 11L17 15"}),
          h('path', {"d":"M19 4L15 8"}),
          h('path', {"d":"M19 8L15 4"})
        ]
      );
  }
});

module.exports = GitPullRequestClosed;
module.exports.GitPullRequestClosed = GitPullRequestClosed;
module.exports.default = GitPullRequestClosed;
