import { defineComponent, h } from 'vue';

const ClockTurnRight = defineComponent({
  name: 'ClockTurnRight',
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
          h('path', {"d":"M19 2L21 4L19 6"}),
          h('path', {"d":"M12 4C7.027 4 3 8.027 3 13C3 17.973 7.027 22 12 22C16.973 22 21 17.973 21 13"}),
          h('path', {"d":"M12 9L12 13L16 13"}),
          h('path', {"d":"M21 4L12 4"})
        ]
      );
  }
});

export default ClockTurnRight;
export { ClockTurnRight };
