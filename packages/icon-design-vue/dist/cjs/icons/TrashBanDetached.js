'use strict';

const { defineComponent, h } = require('vue');

const TrashBanDetached = defineComponent({
  name: 'TrashBanDetached',
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
          h('path', {"d":"M8.97473145010008,22.000000000459295h-2.000000000020009c-1.104569499660101,0-2-.89543050033717-2-2V6.000000000462023"}),
          h('line', {"x1":"15.97473145010008","y1":"6.000000000462023","x2":"15.97473145010008","y2":"9.000000000459295"}),
          h('line', {"x1":"2.974731450080071","y1":"6.000000000462023","x2":"17.97473145010008","y2":"6.000000000462023"}),
          h('line', {"x1":"7.97473145010008","y1":"2.000000000459295","x2":"12.97473145010008","y2":"2.000000000459295"}),
          h('circle', {"cx":"15.941799467210103","cy":"17.032932035377598","r":"5.032931982879632"}),
          h('line', {"x1":"12.382979132779838","y1":"20.591752369644382","x2":"19.500619801639914","y2":"13.474111701115362"})
        ]
      );
  }
});

module.exports = TrashBanDetached;
module.exports.TrashBanDetached = TrashBanDetached;
module.exports.default = TrashBanDetached;
