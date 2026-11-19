'use strict';

const { defineComponent, h } = require('vue');

const BookmarkStripe = defineComponent({
  name: 'BookmarkStripe',
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
          h('line', {"x1":"12","y1":"1.999999999998181","x2":"12","y2":"17.999999999998181"})
        ]
      );
  }
});

module.exports = BookmarkStripe;
module.exports.BookmarkStripe = BookmarkStripe;
module.exports.default = BookmarkStripe;
