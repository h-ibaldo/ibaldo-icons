import { defineComponent, h } from 'vue';

const ArrowSyncClockwiseDottedDiagonal = defineComponent({
  name: 'ArrowSyncClockwiseDottedDiagonal',
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
          h('path', {"d":"M12 3L12 3"}),
          h('path', {"d":"M18.363 5.637L18.363 5.637"}),
          h('path', {"d":"M15.445 3.684L15.445 3.684"}),
          h('path', {"d":"M21 20L17 20L17 16"}),
          h('path', {"d":"M17 19.48C19.41 17.867 21 15.121 21 12C21 10.781 20.754 9.617 20.313 8.555"}),
          h('path', {"d":"M12 21L12 21"}),
          h('path', {"d":"M5.637 18.363L5.637 18.363"}),
          h('path', {"d":"M8.555 20.316L8.555 20.316"}),
          h('path', {"d":"M3 4L7 4L7 8"}),
          h('path', {"d":"M7 4.52C4.59 6.133 3 8.879 3 12C3 13.219 3.246 14.383 3.688 15.445"})
        ]
      );
  }
});

export default ArrowSyncClockwiseDottedDiagonal;
export { ArrowSyncClockwiseDottedDiagonal };
