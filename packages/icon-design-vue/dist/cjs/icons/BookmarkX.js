'use strict';

const { defineComponent, h } = require('vue');

const BookmarkX = defineComponent({
  name: 'BookmarkX',
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
          h('path', {"d":"M17.999999973299964,1.999999999998181H5.999999973299964c-.552284749829596,0-1,.447715250169495-1,1v19l7-4,7,4V2.999999999998181c0-.552284749830505-.447715250170404-1-1-1Z"}),
          h('line', {"x1":"9.999999962529728","y1":"12.000000031348463","x2":"14","y2":"7.999999999998181"}),
          h('line', {"x1":"9.999999962709808","y1":"7.999999999818101","x2":"13.999999999829924","y2":"12.000000031528543"})
        ]
      );
  }
});

module.exports = BookmarkX;
module.exports.BookmarkX = BookmarkX;
module.exports.default = BookmarkX;
