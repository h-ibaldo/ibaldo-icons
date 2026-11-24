'use strict';

const { defineComponent, h } = require('vue');

const BookmarkOff = defineComponent({
  name: 'BookmarkOff',
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
          h('path', {"d":"M18.999999973299964,8.999999999998181V2.999999999998181c0-.552284749830505-.447715250170404-1-1-1H5.999999973299964"}),
          h('polyline', {"points":"4.999999973299964 5.752474922528563 4.999999973299964 21.999999999998181 11.999999973299964 17.999999999998181 18.999999973299964 21.999999999998181 18.999999973299964 13.349999999998545"}),
          h('line', {"x1":"1.999999973299964","y1":"3.999999999998181","x2":"21.999999973299964","y2":"14.999999999998181"})
        ]
      );
  }
});

module.exports = BookmarkOff;
module.exports.BookmarkOff = BookmarkOff;
module.exports.default = BookmarkOff;
