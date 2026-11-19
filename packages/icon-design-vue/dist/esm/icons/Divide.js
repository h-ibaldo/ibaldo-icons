import { defineComponent, h } from 'vue';

const Divide = defineComponent({
  name: 'Divide',
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
          h('path', {"d":"M13 6C13 6.555 12.551 7 12 7C11.449 7 11 6.555 11 6C11 5.445 11.449 5 12 5C12.551 5 13 5.445 13 6Z"}),
          h('path', {"d":"M13 18C13 18.555 12.551 19 12 19C11.449 19 11 18.555 11 18C11 17.445 11.449 17 12 17C12.551 17 13 17.445 13 18Z"}),
          h('path', {"d":"M5 12L19 12"})
        ]
      );
  }
});

export default Divide;
export { Divide };
