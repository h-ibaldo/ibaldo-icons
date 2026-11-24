import { defineComponent, h } from 'vue';

const ChartBarSquarePlusThin = defineComponent({
  name: 'ChartBarSquarePlusThin',
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
          h('path', {"d":"M21.974731440099276,11.000000003885361v6c0,2.761423749150708-2.238576250838378,5-5,5H6.974731440099276c-2.761423749148889,0-5-2.238576250849292-5-5V7.000000003885361c0-2.761423749150708,2.238576250851111-5,5-5h6"}),
          h('line', {"x1":"7.974731440099276","y1":"16.000000003885361","x2":"7.974731440099276","y2":"12.000000003885361"}),
          h('line', {"x1":"11.974731440099276","y1":"16.000000003885361","x2":"11.974731440099276","y2":"8.000000003885361"}),
          h('line', {"x1":"15.974731440099276","y1":"16.000000003885361","x2":"15.974731440099276","y2":"11.000000003885361"}),
          h('line', {"x1":"19.474731440099276","y1":"7.000000003885361","x2":"19.474731440010146","y2":"2.000000003976311"}),
          h('line', {"x1":"16.974731440099276","y1":"4.500000003976311","x2":"21.974731440010146","y2":"4.500000003885361"})
        ]
      );
  }
});

export default ChartBarSquarePlusThin;
export { ChartBarSquarePlusThin };
