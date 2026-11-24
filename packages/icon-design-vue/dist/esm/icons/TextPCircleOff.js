import { defineComponent, h } from 'vue';

const TextPCircleOff = defineComponent({
  name: 'TextPCircleOff',
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
          h('path', {"d":"M4.93 4.93C6.738 3.121 9.238 2 12 2C17.523 2 22 6.477 22 12C22 14.762 20.879 17.262 19.07 19.07M16.117 21.117C14.859 21.684 13.469 22 12 22C6.477 22 2 17.523 2 12C2 10.531 2.316 9.141 2.883 7.883"}),
          h('path', {"d":"M9 9L9 7L13 7C14.656 7 16 8.344 16 10C16 11.656 14.656 13 13 13"}),
          h('path', {"d":"M9 17.125L9 14"})
        ]
      );
  }
});

export default TextPCircleOff;
export { TextPCircleOff };
