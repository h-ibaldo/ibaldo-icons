import { defineComponent, h } from 'vue';

const ChecklistSquareEnds = defineComponent({
  name: 'ChecklistSquareEnds',
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
          h('line', {"x1":"10.974731440099276","y1":"4.000000003885361","x2":"21.974731440099276","y2":"4.000000003885361"}),
          h('line', {"x1":"10.974731440099276","y1":"12.000000003885361","x2":"21.974731440099276","y2":"12.000000003885361"}),
          h('line', {"x1":"10.974731440099276","y1":"20.000000003885361","x2":"21.974731440099276","y2":"20.000000003885361"}),
          h('polyline', {"points":"1.974731440099276 20.000000003885361 3.974731440099276 22.000000003885361 6.974731440099276 18.000000003885361"}),
          h('polyline', {"points":"1.974731440099276 4.000000003885361 3.974731440099276 6.000000003885361 6.974731440099276 2.000000003885361"}),
          h('rect', {"x":"1.974731440099276","y":"10.000000003885361","width":"4","height":"4"})
        ]
      );
  }
});

export default ChecklistSquareEnds;
export { ChecklistSquareEnds };
