import { defineComponent, h } from 'vue';

const DockHorizontal = defineComponent({
  name: 'DockHorizontal',
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
          h('rect', {"x":"1.974731417511066","y":"1.998779298535737","width":"20","height":"20","rx":"1","ry":"1"}),
          h('line', {"x1":"1.974731417511066","y1":"5.998779298535737","x2":"21.974731417511066","y2":"5.998779298535737"}),
          h('line', {"x1":"10.974731417511066","y1":"9.998779298535737","x2":"11.974731417511066","y2":"9.998779298535737"}),
          h('line', {"x1":"10.974731417511066","y1":"13.998779298535737","x2":"11.974731417511066","y2":"13.998779298535737"}),
          h('line', {"x1":"10.974731417511066","y1":"13.998779298535737","x2":"11.974731417511066","y2":"13.998779298535737"}),
          h('line', {"x1":"10.974731417511066","y1":"17.998779298535737","x2":"11.974731417511066","y2":"17.998779298535737"})
        ]
      );
  }
});

export default DockHorizontal;
export { DockHorizontal };
