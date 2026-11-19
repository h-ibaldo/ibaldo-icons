import { defineComponent, h } from 'vue';

const TextAaSquare = defineComponent({
  name: 'TextAaSquare',
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
          h('path', {"d":"M5 16L7.875 8L11 16"}),
          h('path', {"d":"M18 13.5C18 14.883 16.883 16 15.5 16C14.117 16 13 14.883 13 13.5C13 12.117 14.117 11 15.5 11C16.883 11 18 12.117 18 13.5Z"}),
          h('path', {"d":"M18 11L18 16"}),
          h('path', {"d":"M6 14L10 14"})
        ]
      );
  }
});

export default TextAaSquare;
export { TextAaSquare };
