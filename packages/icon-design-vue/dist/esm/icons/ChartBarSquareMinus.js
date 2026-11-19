import { defineComponent, h } from 'vue';

const ChartBarSquareMinus = defineComponent({
  name: 'ChartBarSquareMinus',
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
          h('path', {"d":"M21.974731440099276,9.000000004336471v8c0,2.761423749150708-2.238576250838378,5-5,5H6.974731440099276c-2.761423749148889,0-5-2.238576250849292-5-5V7.000000004336471c0-2.761423749150708,2.238576250851111-5,5-5h6"}),
          h('line', {"x1":"16.974731440099276","y1":"4.50000000442742","x2":"21.974731440010146","y2":"4.500000004336471"}),
          h('rect', {"x":"5.974731440099276","y":"10.000000003885361","width":"4","height":"6"}),
          h('rect', {"x":"9.974731440099276","y":"7.000000003885361","width":"4","height":"9"}),
          h('rect', {"x":"13.974731440099276","y":"11.000000003885361","width":"4","height":"5"})
        ]
      );
  }
});

export default ChartBarSquareMinus;
export { ChartBarSquareMinus };
