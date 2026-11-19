'use strict';

const { defineComponent, h } = require('vue');

const FolderSide = defineComponent({
  name: 'FolderSide',
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
          h('path', {"d":"M18,21.999999999998181H4c-.552284749831415,0-1-.447715250169495-1-1V2.999999999998181c0-.552284749830505.447715250168585-1,1-1h13v7.00000789177102l2,1.99999210822898v10c0,.552284749830505-.447715250170404,1-1,1Z"}),
          h('polyline', {"points":"17 1.999999999998181 21 1.999999999998181 21 9.000007891769201 19 10.999999999998181"})
        ]
      );
  }
});

module.exports = FolderSide;
module.exports.FolderSide = FolderSide;
module.exports.default = FolderSide;
