import { defineComponent, h } from 'vue';

const DivideCircle = defineComponent({
  name: 'DivideCircle',
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
          h('path', {"d":"M22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12Z"}),
          h('path', {"d":"M13 7C13 7.555 12.551 8 12 8C11.449 8 11 7.555 11 7C11 6.445 11.449 6 12 6C12.551 6 13 6.445 13 7Z"}),
          h('path', {"d":"M13 17C13 17.555 12.551 18 12 18C11.449 18 11 17.555 11 17C11 16.445 11.449 16 12 16C12.551 16 13 16.445 13 17Z"}),
          h('path', {"d":"M7 12L17 12"})
        ]
      );
  }
});

export default DivideCircle;
export { DivideCircle };
