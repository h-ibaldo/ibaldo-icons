'use strict';

const { defineComponent, h } = require('vue');

const ScanVideo = defineComponent({
  name: 'ScanVideo',
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
          h('path', {"d":"M2 7L2 5C2 3.344 3.344 2 5 2L7 2"}),
          h('path', {"d":"M22 7L22 5C22 3.344 20.656 2 19 2L17 2"}),
          h('path', {"d":"M2 17L2 19C2 20.656 3.344 22 5 22L7 22"}),
          h('path', {"d":"M22 17L22 19C22 20.656 20.656 22 19 22L17 22"}),
          h('path', {"d":"M12.844 16L7.156 16C6.516 16 6 15.484 6 14.844L6 9.156C6 8.516 6.516 8 7.156 8L12.844 8C13.484 8 14 8.516 14 9.156L14 14.844C14 15.484 13.484 16 12.844 16Z"}),
          h('path', {"d":"M14 11L17.199 8.602C17.531 8.352 18 8.59 18 9L18 15C18 15.41 17.531 15.648 17.199 15.398L14 13"})
        ]
      );
  }
});

module.exports = ScanVideo;
module.exports.ScanVideo = ScanVideo;
module.exports.default = ScanVideo;
