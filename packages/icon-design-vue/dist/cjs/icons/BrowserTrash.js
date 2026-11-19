'use strict';

const { defineComponent, h } = require('vue');

const BrowserTrash = defineComponent({
  name: 'BrowserTrash',
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
          h('path', {"d":"M21.999999996369297,9.999999999998181V3.999999999998181c0-1.104569499661011-.895430500338989-2-2-2H3.999999996369297c-1.104569499659192,0-2,.895430500338989-2,2v16c0,1.104569499664649.895430500340808,2,2,2h6.000000003630703"}),
          h('line', {"x1":"5.010000000000218","y1":"4.999999999998181","x2":"5","y2":"4.999999999998181"}),
          h('line', {"x1":"8.010000000000218","y1":"4.999999999998181","x2":"8","y2":"4.999999999998181"}),
          h('line', {"x1":"19","y1":"4.999999999998181","x2":"11","y2":"4.999999999998181"}),
          h('line', {"x1":"2","y1":"7.999999999998181","x2":"22","y2":"7.999999999998181"}),
          h('path', {"d":"M13.999999996369297,13.999999999998181v7c0,.552284749832324.447715250169495,1,1,1h5c.552284749830505,0,1-.447715250167676,1-1v-7"}),
          h('line', {"x1":"12.999999996369297","y1":"13.999999999998181","x2":"21.999999996369297","y2":"13.999999999998181"}),
          h('polyline', {"points":"15.999999996369297 13.999999999998181 15.999999996369297 11.999999999998181 18.999999996369297 11.999999999998181 18.999999996369297 13.999999999998181"})
        ]
      );
  }
});

module.exports = BrowserTrash;
module.exports.BrowserTrash = BrowserTrash;
module.exports.default = BrowserTrash;
