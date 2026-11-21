'use strict';

const { defineComponent, h } = require('vue');

const GitMerge = defineComponent({
  name: 'GitMerge',
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
          h('path', {"d":"M3 6C3 7.656 4.344 9 6 9C7.656 9 9 7.656 9 6C9 4.344 7.656 3 6 3C4.344 3 3 4.344 3 6Z"}),
          h('path', {"d":"M15 18C15 19.656 16.344 21 18 21C19.656 21 21 19.656 21 18C21 16.344 19.656 15 18 15C16.344 15 15 16.344 15 18Z"}),
          h('path', {"d":"M6 9L6 21"}),
          h('path', {"d":"M6 9C6 13.969 10.031 18 15 18"})
        ]
      );
  }
});

module.exports = GitMerge;
module.exports.GitMerge = GitMerge;
module.exports.default = GitMerge;
