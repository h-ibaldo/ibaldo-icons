import { defineComponent, h } from 'vue';

const Code = defineComponent({
  name: 'Code',
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
          h('path', {"d":"M6 8L2 12L6 16"}),
          h('path', {"d":"M18 8L22 12L18 16"}),
          h('path', {"d":"M14 5L10 19"})
        ]
      );
  }
});

export default Code;
export { Code };
