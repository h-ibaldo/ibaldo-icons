import { defineComponent, h } from 'vue';

const ListArrowBendDownLeft = defineComponent({
  name: 'ListArrowBendDownLeft',
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
          h('path', {"d":"M16.918 2L2 2"}),
          h('path', {"d":"M17 10L2 10"}),
          h('path', {"d":"M22 2L22 15C22 16.656 20.656 18 19 18L13 18"}),
          h('path', {"d":"M9 18L2 18"}),
          h('path', {"d":"M17 14L13 18L17 22"})
        ]
      );
  }
});

export default ListArrowBendDownLeft;
export { ListArrowBendDownLeft };
