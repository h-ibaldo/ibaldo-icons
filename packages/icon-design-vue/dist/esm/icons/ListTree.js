import { defineComponent, h } from 'vue';

const ListTree = defineComponent({
  name: 'ListTree',
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
          h('path', {"d":"M6 4L22 4"}),
          h('path', {"d":"M12 12L22 12"}),
          h('path', {"d":"M2 8L2 17C2 18.656 3.344 20 5 20L8 20"}),
          h('path', {"d":"M2 4L2 9C2 10.656 3.344 12 5 12L8 12"}),
          h('path', {"d":"M12 20L22 20"})
        ]
      );
  }
});

export default ListTree;
export { ListTree };
