import { defineComponent, h } from 'vue';

const ArrowClockwiseTenChevron = defineComponent({
  name: 'ArrowClockwiseTenChevron',
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
          h('path', {"d":"M14.5 17C13.395 17 12.5 16.105 12.5 15L12.5 11C12.5 9.895 13.395 9 14.5 9C15.605 9 16.5 9.895 16.5 11L16.5 15C16.5 16.105 15.605 17 14.5 17Z"}),
          h('path', {"d":"M9 17L9 9L8 9"})
        ]
      );
  }
});

export default ArrowClockwiseTenChevron;
export { ArrowClockwiseTenChevron };
