'use strict';

const { defineComponent, h } = require('vue');

const BookmarkCheckCircleLarge = defineComponent({
  name: 'BookmarkCheckCircleLarge',
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
          h('polyline', {"points":"13.999999973304512 7.499999997568011 15.499999973304512 9.499999997568011 17.999999973304512 6.499999997568011"}),
          h('path', {"d":"M16,1.999999999998181H2.999999973299964c-.552307128899884,0-1,.447692871090112-1,1v19l7-4,7.000000000004547,4v-8"}),
          h('circle', {"cx":"15.999999975731725","cy":"7.999999997570285","r":"5.999999997574037"})
        ]
      );
  }
});

module.exports = BookmarkCheckCircleLarge;
module.exports.BookmarkCheckCircleLarge = BookmarkCheckCircleLarge;
module.exports.default = BookmarkCheckCircleLarge;
