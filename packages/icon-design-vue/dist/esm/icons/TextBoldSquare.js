import { defineComponent, h } from 'vue';

const TextBoldSquare = defineComponent({
  name: 'TextBoldSquare',
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
          h('path', {"d":"M17 22L7 22C4.238 22 2 19.762 2 17L2 7C2 4.238 4.238 2 7 2L17 2C19.762 2 22 4.238 22 7L22 17C22 19.762 19.762 22 17 22Z"}),
          h('path', {"d":"M9 12L13.5 12C14.883 12 16 13.117 16 14.5C16 15.883 14.883 17 13.5 17L9 17"}),
          h('path', {"d":"M9 17L9 7L12.5 7C13.883 7 15 8.117 15 9.5C15 10.883 13.883 12 12.5 12"})
        ]
      );
  }
});

export default TextBoldSquare;
export { TextBoldSquare };
