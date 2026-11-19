'use strict';

const { defineComponent, h } = require('vue');

const BookmarkDotsCircle = defineComponent({
  name: 'BookmarkDotsCircle',
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
          h('path', {"d":"M16.999999973079866,5.999999999998181l.000000000220098-3c0-.552284749830505-.447715250170404-1-1-1H3.999999973299964c-.552284749829596,0-1,.447715250169495-1,1v19l7-4,7,4-.000000000220098-6"}),
          h('circle', {"cx":"16.999999973299964","cy":"10.999999999998181","r":"5"}),
          h('g', {}, [
            h('line', {"x1":"15.499999973299964","y1":"11.009999999998399","x2":"15.499999973299964","y2":"10.999999999998181"}),
            h('line', {"x1":"18.499999973299964","y1":"11.009999999998399","x2":"18.499999973299964","y2":"10.999999999998181"})
          ])
        ]
      );
  }
});

module.exports = BookmarkDotsCircle;
module.exports.BookmarkDotsCircle = BookmarkDotsCircle;
module.exports.default = BookmarkDotsCircle;
