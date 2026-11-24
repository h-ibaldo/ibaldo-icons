'use strict';

const { defineComponent, h } = require('vue');

const Watch = defineComponent({
  name: 'Watch',
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
          h('path', {"d":"M4 12C4 16.418 7.582 20 12 20C16.418 20 20 16.418 20 12C20 7.582 16.418 4 12 4C7.582 4 4 7.582 4 12Z"}),
          h('path', {"d":"M12 8L12 12L15 12"}),
          h('path', {"d":"M19.93 13L22 13L22 11L19.93 11"}),
          h('path', {"d":"M6 3L6 6.723"}),
          h('path', {"d":"M18 6.719L18 3"}),
          h('path', {"d":"M18 21L18 17.277"}),
          h('path', {"d":"M6 17.281L6 21"})
        ]
      );
  }
});

module.exports = Watch;
module.exports.Watch = Watch;
module.exports.default = Watch;
