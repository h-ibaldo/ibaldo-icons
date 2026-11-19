'use strict';

const { defineComponent, h } = require('vue');

const BookmarkSearch = defineComponent({
  name: 'BookmarkSearch',
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
          h('circle', {"cx":"16","cy":"10.999999999998181","r":"4"}),
          h('path', {"d":"M16,6.999999999998181V2.999999999998181c0-.552307128909888-.44769287109375-1-1-1H3c-.55230712890625,0-1,.447692871090112-1,1v19l7-4,7,4v-7"}),
          h('line', {"x1":"18.82843017578125","y1":"13.828430175777612","x2":"22","y2":"16.999999999998181"})
        ]
      );
  }
});

module.exports = BookmarkSearch;
module.exports.BookmarkSearch = BookmarkSearch;
module.exports.default = BookmarkSearch;
