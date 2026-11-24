'use strict';

const { defineComponent, h } = require('vue');

const BookmarkCheckRound = defineComponent({
  name: 'BookmarkCheckRound',
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
          h('path', {"d":"M16.000000026696398,1.999999999998181h-8.000000000001819c-1.656854249492426,0-3,1.343145750509393-3,3v17l7.000000000001819-4,7,4V4.999999999998181c0-1.656854249490607-1.343145750507574-3-3-3Z"}),
          h('polyline', {"points":"9.000000053394615 10.999999999998181 11.000000053394615 12.999999999998181 15.000000053394615 7.999999999998181"})
        ]
      );
  }
});

module.exports = BookmarkCheckRound;
module.exports.BookmarkCheckRound = BookmarkCheckRound;
module.exports.default = BookmarkCheckRound;
