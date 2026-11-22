import { defineComponent, h } from 'vue';

const TablePlus = defineComponent({
  name: 'TablePlus',
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
          h('path', {"d":"M12 22L4 22C2.895 22 2 21.105 2 20L2 4C2 2.895 2.895 2 4 2L20 2C21.105 2 22 2.895 22 4L22 12L12 12Z"}),
          h('path', {"d":"M12 12L12 2"}),
          h('path', {"d":"M19 22L19 16"}),
          h('path', {"d":"M16 19L22 19"}),
          h('path', {"d":"M2 12L12 12"})
        ]
      );
  }
});

export default TablePlus;
export { TablePlus };
