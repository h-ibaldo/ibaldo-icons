'use strict';

const { defineComponent, h } = require('vue');

const ArrowDownTray = defineComponent({
  name: 'ArrowDownTray',
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
          h('path', {"d":"M1.974731449501633,17.000000000480213v2c0,1.104569499661011.895430500340808,2,2,2h16c1.104569499661011,0,2-.895430500338989,2-2v-2"}),
          h('polyline', {"points":"9.974731449501633 15.000000000480213 11.974731449501633 17.000000000480213 13.974731449501633 15.000000000480213"}),
          h('polyline', {"points":"15.974731449501633 11.000000000480213 17.974731449501633 13.000000000480213 19.974731449501633 11.000000000480213"}),
          h('polyline', {"points":"3.974731449501633 11.000000000480213 5.974731449501633 13.000000000480213 7.974731449501633 11.000000000480213"}),
          h('path', {"d":"M21.974731449501633,3.000000000479304h-.000003999997716c-2.209136777589265,0-3.999996000002284,1.790859209815608-3.999996000002284,3.999995999999555v6.000004000001354"}),
          h('path', {"d":"M1.974731449501633,3.000000000567525h.000003999999535c2.209136896799464-.000000000088221,3.9999960000805,1.790859209640075,3.999996000181454,3.999995999820385l.000000000224645,6.000004000001354"}),
          h('line', {"x1":"11.974731449501633","y1":"17.000000000480213","x2":"11.974731449501633","y2":"4.000000000479304"})
        ]
      );
  }
});

module.exports = ArrowDownTray;
module.exports.ArrowDownTray = ArrowDownTray;
module.exports.default = ArrowDownTray;
