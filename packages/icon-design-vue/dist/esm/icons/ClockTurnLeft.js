import { defineComponent, h } from 'vue';

const ClockTurnLeft = defineComponent({
  name: 'ClockTurnLeft',
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
          h('path', {"d":"M5 2L3 4L5 6"}),
          h('path', {"d":"M12 4C16.973 4 21 8.027 21 13C21 17.973 16.973 22 12 22C7.027 22 3 17.973 3 13"}),
          h('path', {"d":"M3 4L12 4"}),
          h('path', {"d":"M12 9L12 13L16 13"})
        ]
      );
  }
});

export default ClockTurnLeft;
export { ClockTurnLeft };
