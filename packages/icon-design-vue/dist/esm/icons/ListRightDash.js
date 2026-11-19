import { defineComponent, h } from 'vue';

const ListRightDash = defineComponent({
  name: 'ListRightDash',
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
          h('path', {"d":"M15 4L3 4"}),
          h('path', {"d":"M15 12L3 12"}),
          h('path', {"d":"M15 20L3 20"}),
          h('path', {"d":"M21 4L20 4"}),
          h('path', {"d":"M21 12L20 12"}),
          h('path', {"d":"M21 20L20 20"})
        ]
      );
  }
});

export default ListRightDash;
export { ListRightDash };
