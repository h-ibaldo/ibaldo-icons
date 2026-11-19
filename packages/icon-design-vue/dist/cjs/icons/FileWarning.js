'use strict';

const { defineComponent, h } = require('vue');

const FileWarning = defineComponent({
  name: 'FileWarning',
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
          h('path', {"d":"M18 8L18 4C18 2.895 17.105 2 16 2L7.984 2C7.354 2 6.75 2.25 6.304 2.696L2.696 6.304C2.25 6.75 2 7.354 2 7.984L2 20C2 21.105 2.895 22 4 22L5 22"}),
          h('path', {"d":"M8 2L8 7C8 7.552 7.552 8 7 8L2 8"}),
          h('path', {"d":"M15 15L15 16"}),
          h('path', {"d":"M15 19L15 19"}),
          h('path', {"d":"M10.446 22L19.554 22C21.089 22 22.052 20.341 21.29 19.008L17.134 11.734C16.19 10.083 13.81 10.083 12.866 11.734L8.71 19.008C7.948 20.341 8.911 22 10.446 22Z"})
        ]
      );
  }
});

module.exports = FileWarning;
module.exports.FileWarning = FileWarning;
module.exports.default = FileWarning;
