'use strict';

const { defineComponent, h } = require('vue');

const FolderLink = defineComponent({
  name: 'FolderLink',
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
          h('path', {"d":"M8 18L4 18C2.895 18 2 17.105 2 16L2 4C2 2.895 2.895 2 4 2L8.465 2C8.801 2 9.109 2.168 9.297 2.445L10.703 4.555C10.891 4.832 11.199 5 11.535 5L18 5C19.105 5 20 5.895 20 7L20 8"}),
          h('path', {"d":"M20 18L21.172 16.828C22.277 15.723 22.277 13.934 21.172 12.828C20.066 11.723 18.277 11.723 17.172 12.828L16 14"}),
          h('path', {"d":"M14 16L12.828 17.172C11.723 18.277 11.723 20.066 12.828 21.172C13.934 22.277 15.723 22.277 16.828 21.172L18 20"}),
          h('path', {"d":"M18 16L16 18"})
        ]
      );
  }
});

module.exports = FolderLink;
module.exports.FolderLink = FolderLink;
module.exports.default = FolderLink;
