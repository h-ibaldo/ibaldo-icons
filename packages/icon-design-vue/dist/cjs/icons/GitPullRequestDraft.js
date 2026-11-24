'use strict';

const { defineComponent, h } = require('vue');

const GitPullRequestDraft = defineComponent({
  name: 'GitPullRequestDraft',
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
          h('path', {"d":"M18.063 15C19.719 15 21.063 16.344 21.063 18C21.063 19.656 19.719 21 18.063 21C16.406 21 15.063 19.656 15.063 18C15.063 16.344 16.406 15 18.063 15Z"}),
          h('path', {"d":"M6 9C4.344 9 3 7.656 3 6C3 4.344 4.344 3 6 3C7.656 3 9 4.344 9 6C9 7.656 7.656 9 6 9Z"}),
          h('path', {"d":"M6 9L6 21"}),
          h('path', {"d":"M18 3L18 5"}),
          h('path', {"d":"M18 9L18 11"})
        ]
      );
  }
});

module.exports = GitPullRequestDraft;
module.exports.GitPullRequestDraft = GitPullRequestDraft;
module.exports.default = GitPullRequestDraft;
