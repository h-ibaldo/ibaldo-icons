import { defineComponent, h } from 'vue';

const SkipBackDoubleCircle = defineComponent({
  name: 'SkipBackDoubleCircle',
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
          h('path', {"d":"M17 8.414L17 15.586C17 15.75 16.805 15.844 16.676 15.738L12 12L16.676 8.262C16.805 8.156 17 8.25 17 8.414Z"}),
          h('path', {"d":"M12 8.414L12 15.586C12 15.75 11.805 15.844 11.676 15.738L7 12L11.676 8.262C11.805 8.156 12 8.25 12 8.414Z"}),
          h('path', {"d":"M7 8L7 16"})
        ]
      );
  }
});

export default SkipBackDoubleCircle;
export { SkipBackDoubleCircle };
