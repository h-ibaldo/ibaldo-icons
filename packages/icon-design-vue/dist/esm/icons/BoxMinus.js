import { defineComponent, h } from 'vue';

const BoxMinus = defineComponent({
  name: 'BoxMinus',
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
          h('path', {"d":"M7 4.5L17 9.5"}),
          h('path', {"d":"M2 7L12 12L22 7"}),
          h('path', {"d":"M12 22L12 12"}),
          h('path', {"d":"M15 20.5L12 22L2 17L2 7L12 2L22 7L22 12"}),
          h('path', {"d":"M16 17L22 17"})
        ]
      );
  }
});

export default BoxMinus;
export { BoxMinus };
