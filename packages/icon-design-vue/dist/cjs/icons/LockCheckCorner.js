'use strict';

const { defineComponent, h } = require('vue');

const LockCheckCorner = defineComponent({
  name: 'LockCheckCorner',
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
          h('path', {"d":"M10.949462885141656,22.000000000480213H3.949462885141656c-.552284749831415,0-1-.447715250171314-1-1v-10c0-.552284749832324.447715250168585-1,1-1h14c.552284749829596,0,1,.447715250167676,1,1v3"}),
          h('path', {"d":"M15.949462885141656,10.000000000480213v-3.000005000001693c0-2.761420987728343-2.238574012270874-4.999994999998307-4.999994999999217-4.999994999998307h-.000010000000657c-2.761420987730162,0-4.999995000000126,2.238574012269964-4.999995000000126,4.999994999998307v3.000005000001693"}),
          h('polyline', {"points":"13.949462885141656 19.000000000480213 16.949462885141656 22.000000000480213 21.949462885141656 17.000000000480213"})
        ]
      );
  }
});

module.exports = LockCheckCorner;
module.exports.LockCheckCorner = LockCheckCorner;
module.exports.default = LockCheckCorner;
