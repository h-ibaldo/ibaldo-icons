'use strict';

const { defineComponent, h } = require('vue');

const BookmarkPlusCircleLarge = defineComponent({
  name: 'BookmarkPlusCircleLarge',
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
          h('circle', {"cx":"15.999999975729679","cy":"7.999999997570285","r":"5.999999997575287"}),
          h('line', {"x1":"13.999999960709829","y1":"7.999999999998181","x2":"17.999999960709829","y2":"7.999999999998181"}),
          h('line', {"x1":"15.999999960709829","y1":"5.999999999998181","x2":"15.999999960709829","y2":"9.999999999998181"}),
          h('path', {"d":"M16,1.999999999998181H2.999999973304512c-.55230712890625,0-1,.447692871090112-1,1v19l7-4,7,4v-8"})
        ]
      );
  }
});

module.exports = BookmarkPlusCircleLarge;
module.exports.BookmarkPlusCircleLarge = BookmarkPlusCircleLarge;
module.exports.default = BookmarkPlusCircleLarge;
