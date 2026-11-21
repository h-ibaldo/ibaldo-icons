import { defineComponent, h } from 'vue';

const PrinterFile = defineComponent({
  name: 'PrinterFile',
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
          h('path', {"d":"M17 10L20 10C21.105 10 22 10.895 22 12L22 20C22 21.105 21.105 22 20 22L4 22C2.895 22 2 21.105 2 20L2 12C2 10.895 2.895 10 4 10L7 10"}),
          h('path', {"d":"M7 13L7 2L14 2L17 5L17 13"}),
          h('path', {"d":"M7 18L7 22"}),
          h('path', {"d":"M17 22L17 18"}),
          h('path', {"d":"M17 13L7 13"}),
          h('path', {"d":"M14 2L14 5L17 5"}),
          h('path', {"d":"M18 18L6 18"})
        ]
      );
  }
});

export default PrinterFile;
export { PrinterFile };
