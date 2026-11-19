import { defineComponent, h } from 'vue';

const ArrowUturnLeftFlippedSquare = defineComponent({
  name: 'ArrowUturnLeftFlippedSquare',
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
          h('path', {"d":"M22 19L22 5C22 3.344 20.656 2 19 2L5 2C3.344 2 2 3.344 2 5L2 19C2 20.656 3.344 22 5 22L19 22C20.656 22 22 20.656 22 19Z"}),
          h('path', {"d":"M11 18L8 15L11 12"}),
          h('path', {"d":"M8 15L13 15C15.211 15 17 13.211 17 11C17 8.789 15.211 7 13 7L11 7"})
        ]
      );
  }
});

export default ArrowUturnLeftFlippedSquare;
export { ArrowUturnLeftFlippedSquare };
