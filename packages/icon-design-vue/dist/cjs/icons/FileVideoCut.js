'use strict';

const { defineComponent, h } = require('vue');

const FileVideoCut = defineComponent({
  name: 'FileVideoCut',
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
          h('path', {"d":"M19 10L19 7.828C19 7.297 18.789 6.789 18.414 6.414L14.586 2.586C14.211 2.211 13.703 2 13.172 2L5 2C3.895 2 3 2.895 3 4L3 20C3 21.105 3.895 22 5 22L6 22"}),
          h('path', {"d":"M17 15L17 14.152C17 13.516 16.484 13 15.844 13L10.156 13C9.516 13 9 13.516 9 14.152L9 19.848C9 20.484 9.516 21 10.156 21L15.844 21C16.484 21 17 20.484 17 19.848L17 19L20.277 20.641C20.609 20.805 21 20.563 21 20.191L21 13.809C21 13.438 20.609 13.195 20.277 13.359Z"})
        ]
      );
  }
});

module.exports = FileVideoCut;
module.exports.FileVideoCut = FileVideoCut;
module.exports.default = FileVideoCut;
