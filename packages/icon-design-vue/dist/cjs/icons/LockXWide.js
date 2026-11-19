'use strict';

const { defineComponent, h } = require('vue');

const LockXWide = defineComponent({
  name: 'LockXWide',
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
          h('path', {"d":"M13.067167566010539,22.056394887018541H4.067167566010539c-.552284749830505,0-1-.447715250169495-1-1v-7c0-.552284749830505.447715250169495-1,1-1h14c.552284749829596,0,1,.447715250169495,1,1h0"}),
          h('path', {"d":"M16.067167566010539,13.056394887018541v-6.000004999998055c0-2.761420987731981-2.238574012270874-4.999995000001945-4.999994999991031-4.999995000001945h-.000009999999747c-2.761420987739257,0-4.999995000009221,2.238574012269964-4.999995000009221,4.999995000001945v6.000004999998055"}),
          h('line', {"x1":"17.067167566149692","y1":"22.056394891864329","x2":"21.067167565870477","y2":"18.056394887018541"}),
          h('line', {"x1":"17.067167566010539","y1":"18.056394887193164","x2":"21.067167566010539","y2":"22.05639489168243"})
        ]
      );
  }
});

module.exports = LockXWide;
module.exports.LockXWide = LockXWide;
module.exports.default = LockXWide;
