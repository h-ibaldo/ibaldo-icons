import { defineComponent, h } from 'vue';

const LayerStackOpenMinus = defineComponent({
  name: 'LayerStackOpenMinus',
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
          h('path', {"d":"M12 12L2 7L12 2L22 7Z"}),
          h('path', {"d":"M7 9.5L2 12L12 17"}),
          h('path', {"d":"M22 12L17 9.5"}),
          h('path', {"d":"M7 14.5L2 17L12 22"}),
          h('path', {"d":"M15 18L22 18"})
        ]
      );
  }
});

export default LayerStackOpenMinus;
export { LayerStackOpenMinus };
