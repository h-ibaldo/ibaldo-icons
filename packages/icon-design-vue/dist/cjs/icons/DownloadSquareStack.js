'use strict';

const { defineComponent, h } = require('vue');

const DownloadSquareStack = defineComponent({
  name: 'DownloadSquareStack',
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
          h('rect', {"x":"1.974731450026411","y":"7.000000000459295","width":"14","height":"15","rx":"3","ry":"3"}),
          h('path', {"d":"M7.974731450026411,7.000000000459295v-1.999999999997272c0-1.656854249496064,1.343145750505755-3,3-3h8c1.656854249493335,0,3,1.343145750503936,3,3v9c0,1.656854249490607-1.343145750510303,3-3,3l-3-.000000000002728"}),
          h('polyline', {"points":"11.974731450026411 15.000000000462023 8.974731449353385 18.000000000462023 5.974731450026411 15.000000000462023"}),
          h('line', {"x1":"8.974731451103253","y1":"11.000000000462023","x2":"8.974731449353385","y2":"18.000000000462023"})
        ]
      );
  }
});

module.exports = DownloadSquareStack;
module.exports.DownloadSquareStack = DownloadSquareStack;
module.exports.default = DownloadSquareStack;
