'use strict';

const { defineComponent, h } = require('vue');

const GitBranchPlus = defineComponent({
  name: 'GitBranchPlus',
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
          h('path', {"d":"M3 18C3 16.344 4.344 15 6 15C7.656 15 9 16.344 9 18C9 19.656 7.656 21 6 21C4.344 21 3 19.656 3 18Z"}),
          h('path', {"d":"M15 6C15 4.344 16.344 3 18 3C19.656 3 21 4.344 21 6C21 7.656 19.656 9 18 9C16.344 9 15 7.656 15 6Z"}),
          h('path', {"d":"M6 15L6 3"}),
          h('path', {"d":"M6 15C6 10.031 10.031 6 15 6"}),
          h('path', {"d":"M21 18L15 18"}),
          h('path', {"d":"M18 21L18 15"})
        ]
      );
  }
});

module.exports = GitBranchPlus;
module.exports.GitBranchPlus = GitBranchPlus;
module.exports.default = GitBranchPlus;
