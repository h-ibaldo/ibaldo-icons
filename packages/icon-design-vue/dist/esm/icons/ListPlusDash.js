import { defineComponent, h } from 'vue';

const ListPlusDash = defineComponent({
  name: 'ListPlusDash',
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
          h('path', {"d":"M8 5L14 5"}),
          h('path', {"d":"M8 10L14 10"}),
          h('path', {"d":"M3 5L4 5"}),
          h('path', {"d":"M3 10L4 10"}),
          h('path', {"d":"M8 15L14 15"}),
          h('path', {"d":"M3 15L4 15"}),
          h('path', {"d":"M18 16L18 22"}),
          h('path', {"d":"M21 19L15 19"})
        ]
      );
  }
});

export default ListPlusDash;
export { ListPlusDash };
