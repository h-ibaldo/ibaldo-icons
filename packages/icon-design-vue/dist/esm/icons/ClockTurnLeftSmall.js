import { defineComponent, h } from 'vue';

const ClockTurnLeftSmall = defineComponent({
  name: 'ClockTurnLeftSmall',
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
          h('path', {"d":"M6 2L3 5L6 8"}),
          h('path', {"d":"M13 5C17.418 5 21 8.582 21 13C21 17.418 17.418 21 13 21C8.582 21 5 17.418 5 13"}),
          h('path', {"d":"M13 9L13 13L17 13"}),
          h('path', {"d":"M3 5L13 5"})
        ]
      );
  }
});

export default ClockTurnLeftSmall;
export { ClockTurnLeftSmall };
