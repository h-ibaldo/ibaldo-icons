'use strict';

const { defineComponent, h } = require('vue');

const BookmarkStackCheck = defineComponent({
  name: 'BookmarkStackCheck',
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
          h('path', {"d":"M14.000000026699126,5.999999999998181H4.000000026699126c-.552284749828686,0-1,.447715250169495-1,1v15l6-4,6,4V6.999999999998181c0-.552284749830505-.447715250169495-1-1-1Z"}),
          h('path', {"d":"M15.000000026699126,13.999999999998181l6,4V2.999999999998181c0-.552284749830505-.447715250169495-1-1-1h-10c-.552284749828686,0-1,.447715250169495-1,1v3"}),
          h('polyline', {"points":"7.000000026699126 11.999999999998181 8.500000026699126 13.499999999998181 11.000000026699126 10.999999999998181"})
        ]
      );
  }
});

module.exports = BookmarkStackCheck;
module.exports.BookmarkStackCheck = BookmarkStackCheck;
module.exports.default = BookmarkStackCheck;
