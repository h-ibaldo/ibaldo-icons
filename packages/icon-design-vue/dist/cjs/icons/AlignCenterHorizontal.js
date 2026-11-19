'use strict';

const { defineComponent, h } = require('vue');

const AlignCenterHorizontal = defineComponent({
  name: 'AlignCenterHorizontal',
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
          h('path', {"d":"M14 12L10.098 12"}),
          h('path', {"d":"M5 12L2 12"}),
          h('path', {"d":"M22 12L19.098 12"}),
          h('path', {"d":"M6.094 4L9 4C9.605 4 10.094 4.488 10.094 5.094L10.094 18.906C10.094 19.512 9.605 20 9 20L6.094 20C5.492 20 5 19.512 5 18.906L5 5.094C5 4.488 5.492 4 6.094 4Z"}),
          h('path', {"d":"M15.191 6.906L18 6.906C18.605 6.906 19.094 7.395 19.094 8L19.094 16C19.094 16.605 18.605 17.094 18 17.094L15.191 17.094C14.586 17.094 14.094 16.605 14.094 16L14.094 8C14.094 7.395 14.586 6.906 15.191 6.906Z"})
        ]
      );
  }
});

module.exports = AlignCenterHorizontal;
module.exports.AlignCenterHorizontal = AlignCenterHorizontal;
module.exports.default = AlignCenterHorizontal;
