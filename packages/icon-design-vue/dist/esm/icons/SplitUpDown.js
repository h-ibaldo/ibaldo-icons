import { defineComponent, h } from 'vue';

const SplitUpDown = defineComponent({
  name: 'SplitUpDown',
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
          h('path', {"d":"M22 2L22 6C22 7.105 21.105 8 20 8L4 8C2.895 8 2 7.105 2 6L2 2"}),
          h('path', {"d":"M2 22L2 18C2 16.895 2.895 16 4 16L20 16C21.105 16 22 16.895 22 18L22 22"}),
          h('path', {"d":"M22 12L20 12"}),
          h('path', {"d":"M16 12L14 12"}),
          h('path', {"d":"M10 12L8 12"}),
          h('path', {"d":"M4 12L2 12"})
        ]
      );
  }
});

export default SplitUpDown;
export { SplitUpDown };
