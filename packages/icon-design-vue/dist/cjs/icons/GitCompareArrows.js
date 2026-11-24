'use strict';

const { defineComponent, h } = require('vue');

const GitCompareArrows = defineComponent({
  name: 'GitCompareArrows',
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
          h('path', {"d":"M19.063 15C20.719 15 22.063 16.344 22.063 18C22.063 19.656 20.719 21 19.063 21C17.406 21 16.063 19.656 16.063 18C16.063 16.344 17.406 15 19.063 15Z"}),
          h('path', {"d":"M5 9C3.344 9 2 7.656 2 6C2 4.344 3.344 3 5 3C6.656 3 8 4.344 8 6C8 7.656 6.656 9 5 9Z"}),
          h('path', {"d":"M19.063 15L19.063 8C19.063 6.895 18.168 6 17.063 6L12 6"}),
          h('path', {"d":"M5 9L5 16C5 17.105 5.895 18 7 18L12 18"}),
          h('path', {"d":"M9 15L12 18L9 21"}),
          h('path', {"d":"M15 9L12 6L15 3"})
        ]
      );
  }
});

module.exports = GitCompareArrows;
module.exports.GitCompareArrows = GitCompareArrows;
module.exports.default = GitCompareArrows;
