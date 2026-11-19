'use strict';

const { defineComponent, h } = require('vue');

const SearchExpandC = defineComponent({
  name: 'SearchExpandC',
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
          h('circle', {"cx":"8.97473141752198","cy":"8.998779298535737","r":"7.000000000000001"}),
          h('line', {"x1":"21.97473141752198","y1":"21.998779298535737","x2":"13.97473141752198","y2":"13.998779298535737"}),
          h('polyline', {"points":"5.974731417511066 6.998779298539375 5.974731417511066 5.998779298535737 6.974731417511066 5.998779298535737"}),
          h('polyline', {"points":"11.974731417532894 6.998779298517547 11.974731417492876 5.998779298513909 10.974731417492876 5.998779298557565"}),
          h('polyline', {"points":"11.974731417532894 10.998779298513909 11.974731417532894 11.998779298513909 10.974731417532894 11.998779298513909"}),
          h('polyline', {"points":"5.974731417511066 10.998779298535737 5.974731417551084 11.998779298535737 6.974731417561998 11.998779298492082"}),
          h('line', {"x1":"5.974731417511066","y1":"11.998779298535737","x2":"11.974731417511066","y2":"5.998779298535737"}),
          h('line', {"x1":"5.974731417511066","y1":"5.998779298535737","x2":"11.974731417511066","y2":"11.998779298535737"})
        ]
      );
  }
});

module.exports = SearchExpandC;
module.exports.SearchExpandC = SearchExpandC;
module.exports.default = SearchExpandC;
