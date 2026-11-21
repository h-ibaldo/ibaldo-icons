'use strict';

const { defineComponent, h } = require('vue');

const GitPullRequestPlusBare = defineComponent({
  name: 'GitPullRequestPlusBare',
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
          h('path', {"d":"M5 9C3.344 9 2 7.656 2 6C2 4.344 3.344 3 5 3C6.656 3 8 4.344 8 6C8 7.656 6.656 9 5 9Z"}),
          h('path', {"d":"M19.063 11L19.063 8C19.063 6.895 18.168 6 17.063 6L12 6"}),
          h('path', {"d":"M5 9L5 21"}),
          h('path', {"d":"M19 15L19 21"}),
          h('path', {"d":"M22 18L16 18"})
        ]
      );
  }
});

module.exports = GitPullRequestPlusBare;
module.exports.GitPullRequestPlusBare = GitPullRequestPlusBare;
module.exports.default = GitPullRequestPlusBare;
