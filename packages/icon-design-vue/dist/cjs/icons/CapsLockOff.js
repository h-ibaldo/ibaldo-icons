'use strict';

const { defineComponent, h } = require('vue');

const CapsLockOff = defineComponent({
  name: 'CapsLockOff',
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
          h('rect', {"x":"7.999999977100742","y":"18.999996563434252","width":"8","height":"3"}),
          h('line', {"x1":"20.999999977100742","y1":"2.999996563434252","x2":"2.999999977100742","y2":"20.999996563434252"}),
          h('g', {}, [
            h('polyline', {"points":"14.64703366851063 4.352962872028002 11.999999977100742 1.999996563434252 2.999999977100742 9.999996563434252 7.999999977100742 9.999996563434252 7.999999977100742 10.999996563434252"}),
            h('polyline', {"points":"7.999999977100742 15.999996563434252 15.999999977100742 15.999996563434252 15.999999977100742 9.999996563434252 20.999999977100742 9.999996563434252 17.294128395069492 6.705868145465502"})
          ])
        ]
      );
  }
});

module.exports = CapsLockOff;
module.exports.CapsLockOff = CapsLockOff;
module.exports.default = CapsLockOff;
