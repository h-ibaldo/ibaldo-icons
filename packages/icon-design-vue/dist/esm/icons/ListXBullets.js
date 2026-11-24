import { defineComponent, h } from 'vue';

const ListXBullets = defineComponent({
  name: 'ListXBullets',
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
          h('path', {"d":"M10.117 4L22.117 4"}),
          h('path', {"d":"M10.117 12L22.117 12"}),
          h('path', {"d":"M10.117 20L22.117 20"}),
          h('path', {"d":"M6.117 2L2.117 6"}),
          h('path', {"d":"M2.117 2L6.117 6"}),
          h('path', {"d":"M6.117 10L2.117 14"}),
          h('path', {"d":"M2.117 10L6.117 14"}),
          h('path', {"d":"M6.117 18L2.117 22"}),
          h('path', {"d":"M2.117 18L6.117 22"})
        ]
      );
  }
});

export default ListXBullets;
export { ListXBullets };
