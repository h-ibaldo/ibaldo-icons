'use strict';

const { defineComponent, h } = require('vue');

const FileImageCornerCut = defineComponent({
  name: 'FileImageCornerCut',
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
          h('path', {"d":"M15 11C15 12.105 14.105 13 13 13C11.895 13 11 12.105 11 11C11 9.895 11.895 9 13 9C14.105 9 15 9.895 15 11Z"}),
          h('path', {"d":"M21 21.723C21.595 21.376 22 20.738 22 20L22 7.984C22 7.354 21.75 6.75 21.304 6.304L17.696 2.696C17.25 2.25 16.646 2 16.016 2L8 2C6.895 2 6 2.895 6 4L6 10"}),
          h('path', {"d":"M2 22L12 22L7 14L2 22Z"}),
          h('path', {"d":"M12 22L17 22L13.5 17L11.057 20.491"})
        ]
      );
  }
});

module.exports = FileImageCornerCut;
module.exports.FileImageCornerCut = FileImageCornerCut;
module.exports.default = FileImageCornerCut;
