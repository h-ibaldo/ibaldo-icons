'use strict';

const { defineComponent, h } = require('vue');

const MailOpenUploadWide = defineComponent({
  name: 'MailOpenUploadWide',
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
          h('path', {"d":"M22.000000000224645,9.032754076844867v11.999999999101419c0,.552284749828686-.447715250170404,1-1,1H3.000000000224645c-.552284749829596,0-1-.447715250171314-1-1v-11.999999999101419"}),
          h('path', {"d":"M2.000000000224645,9.032754075946286l9.42653765563864,6.598576358948776c.344320151391003.2410241059697.802604537329898.2410241059697,1.146924688720901,0l9.426537655640459-6.598576358948776"}),
          h('line', {"x1":"22.000000000224645","y1":"9.032754075946286","x2":"19.000000000224645","y2":"6.932778490005148"}),
          h('line', {"x1":"5.000000000224645","y1":"6.932778490005148","x2":"2.000000000224645","y2":"9.032754075946286"}),
          h('polyline', {"points":"16.000000000224645 4.832802904074924 12.000000000224645 2.032754075946286 8.000000000224645 4.832802904074924"}),
          h('line', {"x1":"12.000000000224645","y1":"2.032754075946286","x2":"12.000000000224645","y2":"9.032754075946286"})
        ]
      );
  }
});

module.exports = MailOpenUploadWide;
module.exports.MailOpenUploadWide = MailOpenUploadWide;
module.exports.default = MailOpenUploadWide;
