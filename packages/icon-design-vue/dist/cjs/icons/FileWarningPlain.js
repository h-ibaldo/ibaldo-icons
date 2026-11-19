'use strict';

const { defineComponent, h } = require('vue');

const FileWarningPlain = defineComponent({
  name: 'FileWarningPlain',
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
          h('path', {"d":"M18 8L18 4C18 2.895 17.105 2 16 2L4 2C2.895 2 2 2.895 2 4L2 20C2 21.105 2.895 22 4 22L5 22"}),
          h('path', {"d":"M15 15L15 16"}),
          h('path', {"d":"M15 19L15 19"}),
          h('path', {"d":"M10.446 22L19.554 22C21.089 22 22.052 20.341 21.29 19.008L17.134 11.734C16.19 10.083 13.81 10.083 12.866 11.734L8.71 19.008C7.948 20.341 8.911 22 10.446 22Z"})
        ]
      );
  }
});

module.exports = FileWarningPlain;
module.exports.FileWarningPlain = FileWarningPlain;
module.exports.default = FileWarningPlain;
