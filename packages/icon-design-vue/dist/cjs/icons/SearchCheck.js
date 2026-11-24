'use strict';

const { defineComponent, h } = require('vue');

const SearchCheck = defineComponent({
  name: 'SearchCheck',
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
          h('circle', {"cx":"10.999999993264282","cy":"10.998779299955459","r":"8.999999999998636"}),
          h('line', {"x1":"17.363952629983032","y1":"17.362731936675118","x2":"21.999999993264282","y2":"21.998779299956368"}),
          h('polyline', {"points":"7.999999993283382 10.998779299956368 9.999999993283382 12.998779299956368 13.999999993283382 8.998779299956368"})
        ]
      );
  }
});

module.exports = SearchCheck;
module.exports.SearchCheck = SearchCheck;
module.exports.default = SearchCheck;
