import { defineComponent, h } from 'vue';

const ListXCircleBottom = defineComponent({
  name: 'ListXCircleBottom',
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
          h('path', {"d":"M6.117 20C6.117 21.105 5.223 22 4.117 22C3.016 22 2.117 21.105 2.117 20C2.117 18.895 3.016 18 4.117 18C5.223 18 6.117 18.895 6.117 20Z"}),
          h('path', {"d":"M10.117 4L22.117 4"}),
          h('path', {"d":"M10.117 12L22.117 12"}),
          h('path', {"d":"M10.117 20L22.117 20"}),
          h('path', {"d":"M6.117 2L2.117 6"}),
          h('path', {"d":"M2.117 2L6.117 6"}),
          h('path', {"d":"M6.117 10L2.117 14"}),
          h('path', {"d":"M2.117 10L6.117 14"})
        ]
      );
  }
});

export default ListXCircleBottom;
export { ListXCircleBottom };
