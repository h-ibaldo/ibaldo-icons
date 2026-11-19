'use strict';

const { defineComponent, h } = require('vue');

const FileTrianglePlain = defineComponent({
  name: 'FileTrianglePlain',
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
          h('path', {"d":"M19 11L19 4C19 2.895 18.105 2 17 2L5 2C3.895 2 3 2.895 3 4L3 20C3 21.105 3.895 22 5 22L8 22"}),
          h('path', {"d":"M12.796 22L19.498 22C20.664 22 21.384 20.728 20.784 19.728L17.433 14.144C16.851 13.173 15.443 13.173 14.861 14.144L11.51 19.728C10.91 20.728 11.63 22 12.796 22Z"})
        ]
      );
  }
});

module.exports = FileTrianglePlain;
module.exports.FileTrianglePlain = FileTrianglePlain;
module.exports.default = FileTrianglePlain;
