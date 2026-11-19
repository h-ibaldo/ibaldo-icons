import { defineComponent, h } from 'vue';

const ListDash = defineComponent({
  name: 'ListDash',
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
          h('path', {"d":"M9 4L21 4"}),
          h('path', {"d":"M9 12L21 12"}),
          h('path', {"d":"M9 20L21 20"}),
          h('path', {"d":"M3 4L4 4"}),
          h('path', {"d":"M3 12L4 12"}),
          h('path', {"d":"M3 20L4 20"})
        ]
      );
  }
});

export default ListDash;
export { ListDash };
