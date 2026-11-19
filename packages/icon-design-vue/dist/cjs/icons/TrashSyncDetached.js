'use strict';

const { defineComponent, h } = require('vue');

const TrashSyncDetached = defineComponent({
  name: 'TrashSyncDetached',
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
          h('path', {"d":"M7.974731450080071,22.000000000459295h-2c-1.104569499660101,0-2-.89543050033717-2-2V6.000000000462023"}),
          h('line', {"x1":"14.97473145010008","y1":"6.000000000462023","x2":"14.97473145010008","y2":"9.000000000459295"}),
          h('line', {"x1":"1.974731450080071","y1":"6.000000000462023","x2":"16.97473145010008","y2":"6.000000000462023"}),
          h('g', {}, [
            h('polyline', {"points":"21.974731450080071 12.000000000459295 21.974731450080071 15.000000000456566 18.974731450080071 15.000000000456566"}),
            h('polyline', {"points":"10.974731450080071 21.000000000459295 10.974731450080071 18.000000000462023 13.974731450080071 18.000000000462023"}),
            h('path', {"d":"M21.552612309449614,15.000000000459295c-.772216796869543-1.764404296875-2.528686523439319-3-4.577880859369543-3-1.630493164069776,0-3.064636230470569.792236328125-3.977355957030341,2"}),
            h('path', {"d":"M12.075500493049731,18.000000000459295c.46337890625,2.282165527344659,2.480346679680224,4,4.899230957030341,4,2.047790527340112,0,3.796447753899884-1.237548828125,4.5693359375-3"})
          ]),
          h('line', {"x1":"6.97473145010008","y1":"2.000000000459295","x2":"11.97473145010008","y2":"2.000000000459295"})
        ]
      );
  }
});

module.exports = TrashSyncDetached;
module.exports.TrashSyncDetached = TrashSyncDetached;
module.exports.default = TrashSyncDetached;
