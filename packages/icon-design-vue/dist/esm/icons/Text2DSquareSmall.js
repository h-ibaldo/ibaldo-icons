import { defineComponent, h } from 'vue';

const Text2DSquareSmall = defineComponent({
  name: 'Text2DSquareSmall',
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
          h('path', {"d":"M20 22L4 22C2.895 22 2 21.105 2 20L2 4C2 2.895 2.895 2 4 2L20 2C21.105 2 22 2.895 22 4L22 20C22 21.105 21.105 22 20 22Z"}),
          h('path', {"d":"M10 16L6 16C6 14.742 6.594 13.555 7.602 12.801L9.199 11.602C9.703 11.223 10 10.629 10 10C10 8.895 9.105 8 8 8C6.895 8 6 8.895 6 10"}),
          h('path', {"d":"M15 16L14 16L14 8L15 8C16.656 8 18 9.344 18 11L18 13C18 14.656 16.656 16 15 16Z"})
        ]
      );
  }
});

export default Text2DSquareSmall;
export { Text2DSquareSmall };
