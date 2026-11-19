import { defineComponent, h } from 'vue';

const MoveUpDown = defineComponent({
  name: 'MoveUpDown',
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
          h('line', {"x1":"21.000000004469257","y1":"12.000000003885361","x2":"3.000000004469257","y2":"12.000000003885361"}),
          h('line', {"x1":"21.000000004469257","y1":"8.000000003885361","x2":"3.000000004469257","y2":"8.000000003885361"}),
          h('polyline', {"points":"10.000000004469257 4.000000003886271 12.000000004469257 2.000000003886271 14.000000004469257 4.000000003886271"}),
          h('line', {"x1":"12.000000004469257","y1":"8.000000003885361","x2":"12.000000004469257","y2":"2.000000003886271"}),
          h('line', {"x1":"3.000000004469257","y1":"16.000000003885361","x2":"21.000000004469257","y2":"16.000000003885361"}),
          h('polyline', {"points":"14.000000004469257 20.000000003885361 12.000000004469257 22.000000003885361 10.000000004469257 20.000000003885361"}),
          h('line', {"x1":"12.000000004469257","y1":"16.000000003885361","x2":"12.000000004469257","y2":"22.000000003885361"})
        ]
      );
  }
});

export default MoveUpDown;
export { MoveUpDown };
