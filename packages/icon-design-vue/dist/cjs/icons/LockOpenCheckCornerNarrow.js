'use strict';

const { defineComponent, h } = require('vue');

const LockOpenCheckCornerNarrow = defineComponent({
  name: 'LockOpenCheckCornerNarrow',
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
          h('path', {"d":"M15.527343744516656,5.000000000480213c-.772216796875-1.764404296875-2.5286865234375-3-4.577880859375-3-2.761474609375,0-5,2.23858642578125-5,5v3"}),
          h('path', {"d":"M10.949462885141656,22.000000000480213h-6c-.552284749830505,0-1-.447715250171314-1-1v-10c0-.552284749832324.447715250169495-1,1-1h12c.552284749830505,0,1,.447715250167676,1,1v4"}),
          h('polyline', {"points":"13.949462885141656 19.000000000480213 16.949462885141656 22.000000000480213 21.949462885141656 17.000000000480213"})
        ]
      );
  }
});

module.exports = LockOpenCheckCornerNarrow;
module.exports.LockOpenCheckCornerNarrow = LockOpenCheckCornerNarrow;
module.exports.default = LockOpenCheckCornerNarrow;
