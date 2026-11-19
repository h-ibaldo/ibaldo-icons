'use strict';

const { defineComponent, h } = require('vue');

const FileEditLeftCut = defineComponent({
  name: 'FileEditLeftCut',
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
          h('path', {"d":"M5 18L5 20C5 21.105 5.895 22 7 22L19 22C20.105 22 21 21.105 21 20L21 7.828C21 7.298 20.789 6.789 20.414 6.414L16.586 2.586C16.211 2.211 15.702 2 15.172 2L7 2C5.895 2 5 2.895 5 4L5 5"}),
          h('path', {"d":"M3.293 10.464L4.879 8.879C5.269 8.488 5.902 8.488 6.293 8.879L12.414 15L12.414 18L9.414 18L3.293 11.879C2.902 11.488 2.902 10.855 3.293 10.464Z"})
        ]
      );
  }
});

module.exports = FileEditLeftCut;
module.exports.FileEditLeftCut = FileEditLeftCut;
module.exports.default = FileEditLeftCut;
