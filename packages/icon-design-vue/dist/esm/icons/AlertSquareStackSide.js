import { defineComponent, h } from 'vue';

const AlertSquareStackSide = defineComponent({
  name: 'AlertSquareStackSide',
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
          h('rect', {"x":"7.000000005000402","y":"3.000000003880814","width":"14","height":"18.000000000010914","rx":"2","ry":"2"}),
          h('line', {"x1":"3.000000005000402","y1":"4.000000003891728","x2":"3.000000005000402","y2":"20.000000003891728"}),
          h('line', {"x1":"14.000000005000402","y1":"8.000000003891728","x2":"14.000000005000402","y2":"12.000000003891728"}),
          h('line', {"x1":"14.000000005000402","y1":"16.010000003891946","x2":"14.000000005000402","y2":"16.000000003891728"})
        ]
      );
  }
});

export default AlertSquareStackSide;
export { AlertSquareStackSide };
