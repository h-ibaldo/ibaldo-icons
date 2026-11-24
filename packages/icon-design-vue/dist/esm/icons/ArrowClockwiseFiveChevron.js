import { defineComponent, h } from 'vue';

const ArrowClockwiseFiveChevron = defineComponent({
  name: 'ArrowClockwiseFiveChevron',
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
          h('path', {"d":"M12 4C7.027 4 3 8.027 3 13C3 17.973 7.027 22 12 22C16.973 22 21 17.973 21 13C21 11.945 20.809 10.938 20.477 10"}),
          h('path', {"d":"M12 4L20 4"}),
          h('path', {"d":"M14 9L10 9L10 12.5L11.75 12.5C12.992 12.5 14 13.508 14 14.75C14 15.992 12.992 17 11.75 17L10 17"})
        ]
      );
  }
});

export default ArrowClockwiseFiveChevron;
export { ArrowClockwiseFiveChevron };
