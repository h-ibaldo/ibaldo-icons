import { defineComponent, h } from 'vue';

const TextBCircle = defineComponent({
  name: 'TextBCircle',
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
          h('path', {"d":"M2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12Z"}),
          h('path', {"d":"M8 7L8 17L14.5 17C15.883 17 17 15.879 17 14.5C17 13.121 15.883 12 14.5 12L8 12L13.5 12C14.883 12 16 10.879 16 9.5C16 8.121 14.883 7 13.5 7Z"})
        ]
      );
  }
});

export default TextBCircle;
export { TextBCircle };
