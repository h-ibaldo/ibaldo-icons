'use strict';

const { defineComponent, h } = require('vue');

const MailOpenUpload2 = defineComponent({
  name: 'MailOpenUpload2',
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
          h('polyline', {"points":"22.000000000224645 9.032754076844867 22.000000000224645 22.032754075946286 2.000000000224645 22.032754075946286 2.000000000224645 9.032754076844867"}),
          h('polyline', {"points":"21.999999999821739 9.032754077747086 12.000000000633008 2.032754075946286 1.999999999821739 9.032754075946286"}),
          h('polyline', {"points":"15.000000000224645 9.032754075946286 12.00000000063028 7.032754075946286 9.000000000224645 9.032754075946286"}),
          h('line', {"x1":"12.000000000224645","y1":"12.032754075946286","x2":"12.000000000224645","y2":"7.032754075946286"}),
          h('polyline', {"points":"6.000000000224645 12.832802904074924 12.000000000224645 17.032754075946286 18.000000000224645 12.832802904074924"})
        ]
      );
  }
});

module.exports = MailOpenUpload2;
module.exports.MailOpenUpload2 = MailOpenUpload2;
module.exports.default = MailOpenUpload2;
