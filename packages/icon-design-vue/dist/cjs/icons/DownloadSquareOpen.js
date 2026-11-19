'use strict';

const { defineComponent, h } = require('vue');

const DownloadSquareOpen = defineComponent({
  name: 'DownloadSquareOpen',
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
          h('path', {"d":"M16.974731450030959,5.000000000462023h2c1.656854249487878,0,3,1.343145750503936,3,3v10.999999999997272c0,1.656854249493335-1.343145750512122,3-3,3H4.974731450030959c-1.656854249495154,0-3-1.343145750506665-3-3v-10.999999999997272c0-1.656854249496064,1.343145750504846-3,3-3h2"}),
          h('polyline', {"points":"14.974731450030959 9.000000000462023 11.974731449356113 12.000000000462023 8.974731450030959 9.000000000462023"}),
          h('line', {"x1":"11.9747314511078","y1":"2.000000000462023","x2":"11.974731449356113","y2":"12.000000000462023"}),
          h('line', {"x1":"6.974731450030959","y1":"17.000000000462023","x2":"16.974731450030959","y2":"17.000000000462023"})
        ]
      );
  }
});

module.exports = DownloadSquareOpen;
module.exports.DownloadSquareOpen = DownloadSquareOpen;
module.exports.default = DownloadSquareOpen;
