import { defineComponent, h } from 'vue';

const TextPSquareOff = defineComponent({
  name: 'TextPSquareOff',
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
          h('path', {"d":"M2 2L22 22"}),
          h('path', {"d":"M21.121 21.121C21.664 20.578 22 19.828 22 19L22 5C22 3.344 20.656 2 19 2L5 2C4.172 2 3.422 2.336 2.879 2.879"}),
          h('path', {"d":"M2 6.973L2 19C2 20.656 3.344 22 5 22L17.027 22"}),
          h('path', {"d":"M9 9L9 7L13 7C14.656 7 16 8.344 16 10C16 11.656 14.656 13 13 13"}),
          h('path', {"d":"M9 17.125L9 14"})
        ]
      );
  }
});

export default TextPSquareOff;
export { TextPSquareOff };
