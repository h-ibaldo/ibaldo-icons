import { defineComponent, h } from 'vue';

const ListCircleXBottom = defineComponent({
  name: 'ListCircleXBottom',
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
          h('path', {"d":"M6.117 12C6.117 10.895 5.223 10 4.117 10C3.016 10 2.117 10.895 2.117 12C2.117 13.105 3.016 14 4.117 14C5.223 14 6.117 13.105 6.117 12Z"}),
          h('path', {"d":"M6.117 4C6.117 2.895 5.223 2 4.117 2C3.016 2 2.117 2.895 2.117 4C2.117 5.105 3.016 6 4.117 6C5.223 6 6.117 5.105 6.117 4Z"}),
          h('path', {"d":"M10.117 20L22.117 20"}),
          h('path', {"d":"M10.117 12L22.117 12"}),
          h('path', {"d":"M10.117 4L22.117 4"}),
          h('path', {"d":"M6.117 22L2.117 18"}),
          h('path', {"d":"M2.117 22L6.117 18"})
        ]
      );
  }
});

export default ListCircleXBottom;
export { ListCircleXBottom };
