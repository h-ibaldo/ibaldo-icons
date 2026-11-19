import { defineComponent, h } from 'vue';

const ArrowUpDown = defineComponent({
  name: 'ArrowUpDown',
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
          h('path', {"d":"M17 5L17 20"}),
          h('path', {"d":"M14 17L17 20L20 17"}),
          h('path', {"d":"M10 7.5L7 4.5L4 7.5"}),
          h('path', {"d":"M7 19L7 4.5"})
        ]
      );
  }
});

export default ArrowUpDown;
export { ArrowUpDown };
