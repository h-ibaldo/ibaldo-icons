import { defineComponent, h } from 'vue';

const ListDividerDash = defineComponent({
  name: 'ListDividerDash',
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
          h('path', {"d":"M9 3L21 3"}),
          h('path', {"d":"M3 12L21 12"}),
          h('path', {"d":"M9 21L21 21"}),
          h('path', {"d":"M3 3L4 3"}),
          h('path', {"d":"M9 7L21 7"}),
          h('path', {"d":"M3 7L4 7"}),
          h('path', {"d":"M9 17L21 17"}),
          h('path', {"d":"M3 17L4 17"}),
          h('path', {"d":"M3 21L4 21"})
        ]
      );
  }
});

export default ListDividerDash;
export { ListDividerDash };
