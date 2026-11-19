import { defineComponent, h } from 'vue';

const FormRows = defineComponent({
  name: 'FormRows',
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
          h('rect', {"x":"9.000000005000402","y":"2.000000003886271","width":"13","height":"4","rx":"1","ry":"1"}),
          h('line', {"x1":"2.000000005000402","y1":"4.000000003886271","x2":"6.000000005000402","y2":"4.000000003886271"}),
          h('rect', {"x":"9.000000005000402","y":"10.000000003886271","width":"13","height":"4","rx":"1","ry":"1"}),
          h('rect', {"x":"9.000000005000402","y":"18.000000003886271","width":"13","height":"4","rx":"1","ry":"1"}),
          h('line', {"x1":"2.000000005000402","y1":"12.000000003886271","x2":"6.000000005000402","y2":"12.000000003886271"}),
          h('line', {"x1":"2.000000005000402","y1":"20.000000003886271","x2":"6.000000005000402","y2":"20.000000003886271"})
        ]
      );
  }
});

export default FormRows;
export { FormRows };
