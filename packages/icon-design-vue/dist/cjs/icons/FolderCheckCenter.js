'use strict';

const { defineComponent, h } = require('vue');

const FolderCheckCenter = defineComponent({
  name: 'FolderCheckCenter',
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
          h('path', {"d":"M19.999999957370164,20.999999999998181H3.999999978690539c-1.104569499661011,0-2-.895430500340808-2-2V4.999999999998181c0-1.104569499659192.895430500338989-2,2-2h3.92963058965961c.668705935499929,0,1.293168239900297.334201833509724,1.66409989927979.890598573469106l.812536329360228,1.218802853061788c.370931659389498.556396739959382.995393963789866.890598573469106,1.664099899289795.890598573469106h7.929633178259792c1.104569491610164,0,1.99999998785006.895430489210412,1.999999996510269,1.999999980818757l.000000086320142,11.00000000349246c.000000008669303,1.104569505789186-.8954304941999,2.000000015688784-2,2.000000015688784Z"}),
          h('polyline', {"points":"7.999999978690539 12.999999999998181 10.999999978690539 15.999999999998181 15.999999978690539 10.999999999998181"})
        ]
      );
  }
});

module.exports = FolderCheckCenter;
module.exports.FolderCheckCenter = FolderCheckCenter;
module.exports.default = FolderCheckCenter;
