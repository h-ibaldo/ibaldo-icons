'use strict';

const { defineComponent, h } = require('vue');

const RecordOff = defineComponent({
  name: 'RecordOff',
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
          h('path', {"d":"M20 4L4 20"}),
          h('path', {"d":"M6.344 17.656C7.789 19.105 9.789 20 12 20C16.418 20 20 16.418 20 12C20 9.789 19.105 7.789 17.656 6.344"}),
          h('path', {"d":"M13.789 4.207C13.215 4.078 12.617 4 12 4C7.582 4 4 7.582 4 12C4 12.617 4.074 13.215 4.211 13.793"})
        ]
      );
  }
});

module.exports = RecordOff;
module.exports.RecordOff = RecordOff;
module.exports.default = RecordOff;
