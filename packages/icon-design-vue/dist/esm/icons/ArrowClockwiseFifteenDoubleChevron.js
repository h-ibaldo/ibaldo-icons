import { defineComponent, h } from 'vue';

const ArrowClockwiseFifteenDoubleChevron = defineComponent({
  name: 'ArrowClockwiseFifteenDoubleChevron',
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
          h('path', {"d":"M18 2L20 4L18 6"}),
          h('path', {"d":"M13 2L15 4L13 6"}),
          h('path', {"d":"M12 4C7.027 4 3 8.027 3 13C3 17.973 7.027 22 12 22C16.973 22 21 17.973 21 13C21 11.945 20.809 10.938 20.477 10"}),
          h('path', {"d":"M12 4L15 4"}),
          h('path', {"d":"M8 10L9 10L9 17"}),
          h('path', {"d":"M16 10L13 10L13 13L14 13C15.105 13 16 13.895 16 15C16 16.105 15.105 17 14 17L13 17"})
        ]
      );
  }
});

export default ArrowClockwiseFifteenDoubleChevron;
export { ArrowClockwiseFifteenDoubleChevron };
