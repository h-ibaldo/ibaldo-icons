import { defineComponent, h } from 'vue';

const ListCheckSquare = defineComponent({
  name: 'ListCheckSquare',
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
          h('path', {"d":"M20 9L16 9"}),
          h('path', {"d":"M20 13L16 13"}),
          h('path', {"d":"M20 17L9 17"}),
          h('path', {"d":"M20 21L9 21"}),
          h('path', {"d":"M5 17L4 17"}),
          h('path', {"d":"M5 21L4 21"}),
          h('path', {"d":"M5.5 8L6.5 9L8.5 7"}),
          h('path', {"d":"M10 13L4 13C2.895 13 2 12.105 2 11L2 5C2 3.895 2.895 3 4 3L10 3C11.105 3 12 3.895 12 5L12 11C12 12.105 11.105 13 10 13Z"})
        ]
      );
  }
});

export default ListCheckSquare;
export { ListCheckSquare };
