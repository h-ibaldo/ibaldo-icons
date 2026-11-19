'use strict';

const { defineComponent, h } = require('vue');

const FileArrowOut = defineComponent({
  name: 'FileArrowOut',
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
          h('path', {"d":"M17 22L20 19L17 16"}),
          h('path', {"d":"M12 19L20 19"}),
          h('path', {"d":"M20 13L20 7.984C20 7.354 19.75 6.75 19.304 6.304L15.696 2.696C15.25 2.25 14.646 2 14.016 2L6 2C4.895 2 4 2.895 4 4L4 20C4 21.105 4.895 22 6 22L9 22"}),
          h('path', {"d":"M14 2L14 7C14 7.552 14.448 8 15 8L20 8"})
        ]
      );
  }
});

module.exports = FileArrowOut;
module.exports.FileArrowOut = FileArrowOut;
module.exports.default = FileArrowOut;
