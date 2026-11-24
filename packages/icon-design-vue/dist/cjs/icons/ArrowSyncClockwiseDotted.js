'use strict';

const { defineComponent, h } = require('vue');

const ArrowSyncClockwiseDotted = defineComponent({
  name: 'ArrowSyncClockwiseDotted',
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
          h('path', {"d":"M12 4L12 4"}),
          h('path', {"d":"M12 4L12 4"}),
          h('path', {"d":"M8.492 4.809L8.492 4.809"}),
          h('path', {"d":"M5.695 7.074L5.695 7.074"}),
          h('path', {"d":"M15.254 4.691L15.254 4.691"}),
          h('path', {"d":"M22 11L20 13L18 11"}),
          h('path', {"d":"M20 12C20 8.742 18.047 5.941 15.25 4.695"}),
          h('path', {"d":"M12 20L12 20"}),
          h('path', {"d":"M12 20L12 20"}),
          h('path', {"d":"M15.508 19.191L15.508 19.191"}),
          h('path', {"d":"M18.305 16.926L18.305 16.926"}),
          h('path', {"d":"M8.746 19.309L8.746 19.309"}),
          h('path', {"d":"M2 13L4 11L6 13"}),
          h('path', {"d":"M4 12C4 15.258 5.953 18.059 8.75 19.305"})
        ]
      );
  }
});

module.exports = ArrowSyncClockwiseDotted;
module.exports.ArrowSyncClockwiseDotted = ArrowSyncClockwiseDotted;
module.exports.default = ArrowSyncClockwiseDotted;
