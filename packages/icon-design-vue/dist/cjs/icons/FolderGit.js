'use strict';

const { defineComponent, h } = require('vue');

const FolderGit = defineComponent({
  name: 'FolderGit',
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
          h('path', {"d":"M11 21L4 21C2.895 21 2 20.105 2 19L2 5C2 3.895 2.895 3 4 3L7.93 3C8.598 3 9.223 3.336 9.594 3.891L10.406 5.109C10.777 5.664 11.402 6 12.07 6L20 6C21.105 6 22 6.895 22 8L22 12"}),
          h('path', {"d":"M20 17C20 16.449 20.449 16 21 16C21.551 16 22 16.449 22 17C22 17.551 21.551 18 21 18C20.449 18 20 17.551 20 17Z"}),
          h('path', {"d":"M15 20C15 19.449 15.449 19 16 19C16.551 19 17 19.449 17 20C17 20.551 16.551 21 16 21C15.449 21 15 20.551 15 20Z"}),
          h('path', {"d":"M15 13C15 12.449 15.449 12 16 12C16.551 12 17 12.449 17 13C17 13.551 16.551 14 16 14C15.449 14 15 13.551 15 13Z"}),
          h('path', {"d":"M21 17L16 13L16 20"}),
          h('path', {"d":"M16 13L12 10"})
        ]
      );
  }
});

module.exports = FolderGit;
module.exports.FolderGit = FolderGit;
module.exports.default = FolderGit;
