import { defineComponent, h } from 'vue';

const DiagramFlowchart = defineComponent({
  name: 'DiagramFlowchart',
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
          h('rect', {"x":"1.999999999994543","y":"2","width":"8","height":"8"}),
          h('rect', {"x":"13.999999999994543","y":"14","width":"8","height":"8"}),
          h('circle', {"cx":"17.999999999996817","cy":"6","r":"4.000000000001137"}),
          h('line', {"x1":"9.999999999994543","y1":"6","x2":"13.999999999994543","y2":"6"}),
          h('line', {"x1":"9.999999999994543","y1":"18","x2":"13.999999999994543","y2":"18"}),
          h('rect', {"x":"3.171572875248353","y":"15.17157287525381","width":"5.65685424949238","height":"5.656854249492381","transform":"translate(-10.970562748478741 9.514718625757576) rotate(-45.000000000000014)"}),
          h('line', {"x1":"5.999999999994543","y1":"14","x2":"5.999999999994543","y2":"10"})
        ]
      );
  }
});

export default DiagramFlowchart;
export { DiagramFlowchart };
