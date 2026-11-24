import { defineComponent, h } from 'vue';

const TextAdSquare = defineComponent({
  name: 'TextAdSquare',
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
          h('path', {"d":"M6 16L8 8L9.125 8L11 16"}),
          h('path', {"d":"M16 8L14 8L14 16L16 16C17.105 16 18 15.105 18 14L18 10C18 8.895 17.105 8 16 8Z"}),
          h('path', {"d":"M7 15L10 15"})
        ]
      );
  }
});

export default TextAdSquare;
export { TextAdSquare };
