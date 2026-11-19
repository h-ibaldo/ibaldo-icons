import { defineComponent, h } from 'vue';

const ClockCounterclockwise = defineComponent({
  name: 'ClockCounterclockwise',
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
          h('path', {"d":"M4 2L4 6L8 6"}),
          h('path', {"d":"M4.016 6C5.84 3.574 8.73 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12C2 11.316 2.07 10.645 2.199 10"}),
          h('path', {"d":"M12 7L12 12L17 12"})
        ]
      );
  }
});

export default ClockCounterclockwise;
export { ClockCounterclockwise };
