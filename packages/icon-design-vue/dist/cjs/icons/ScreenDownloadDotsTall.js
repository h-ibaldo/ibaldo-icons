'use strict';

const { defineComponent, h } = require('vue');

const ScreenDownloadDotsTall = defineComponent({
  name: 'ScreenDownloadDotsTall',
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
          h('path', {"d":"M16.974731450033687,2.000000000456566h2c1.656854249491516,0,3,1.343145750509393,3,3v14c0,1.656854249496064-1.343145750508484,3.000000000001819-3,3.000000000001819H4.974731450033687c-1.656854249491516,0-3-1.343145750505755-3-3.000000000001819V5.000000000456566c0-1.656854249490607,1.343145750508484-3,3-3l2,.000000000002728"}),
          h('polyline', {"points":"14.974731450033687 8.000000000459295 11.974731449360661 11.000000000459295 8.974731450033687 8.000000000459295"}),
          h('line', {"x1":"11.974731450033687","y1":"2.000000000459295","x2":"11.974731449360661","y2":"11.000000000459295"}),
          h('rect', {"x":"5.974731450033687","y":"17.000000000459295","width":"2","height":"1"}),
          h('rect', {"x":"10.974731450033687","y":"17.000000000459295","width":"2","height":"1"}),
          h('rect', {"x":"15.974731450033687","y":"17.000000000459295","width":"2","height":"1"})
        ]
      );
  }
});

module.exports = ScreenDownloadDotsTall;
module.exports.ScreenDownloadDotsTall = ScreenDownloadDotsTall;
module.exports.default = ScreenDownloadDotsTall;
