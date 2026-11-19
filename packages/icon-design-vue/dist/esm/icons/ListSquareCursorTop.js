import { defineComponent, h } from 'vue';

const ListSquareCursorTop = defineComponent({
  name: 'ListSquareCursorTop',
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
          h('path', {"d":"M10 2L19 2C20.656 2 22 3.344 22 5L22 19C22 20.656 20.656 22 19 22L5 22C3.344 22 2 20.656 2 19L2 16"}),
          h('path', {"d":"M17 18L7 18"}),
          h('path', {"d":"M17 14L13 14"}),
          h('path', {"d":"M17 10L14 10"}),
          h('path', {"d":"M17 6L14 6"}),
          h('path', {"d":"M10.258 7.883L7.895 8.703L9.859 12.305L6.77 13.988L4.809 10.387L2.836 11.93C2.496 12.195 2 11.953 2 11.523L2 2.52C2 2.109 2.453 1.859 2.797 2.082L10.367 6.957C10.73 7.191 10.664 7.738 10.258 7.883Z"})
        ]
      );
  }
});

export default ListSquareCursorTop;
export { ListSquareCursorTop };
