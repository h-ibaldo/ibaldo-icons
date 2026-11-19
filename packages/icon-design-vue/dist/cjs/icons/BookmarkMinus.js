'use strict';

const { defineComponent, h } = require('vue');

const BookmarkMinus = defineComponent({
  name: 'BookmarkMinus',
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
          h('path', {"d":"M18,1.999999999998181H6c-.552284749830505,0-1,.447715250169495-1,1v19l7-4,7,4V2.999999999998181c0-.552284749830505-.447715250169495-1-1-1Z"}),
          h('line', {"x1":"8.999999973299964","y1":"10.999999999998181","x2":"14.999999973299964","y2":"10.999999999998181"})
        ]
      );
  }
});

module.exports = BookmarkMinus;
module.exports.BookmarkMinus = BookmarkMinus;
module.exports.default = BookmarkMinus;
