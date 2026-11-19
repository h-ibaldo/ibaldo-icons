import { defineComponent, h } from 'vue';

const FormLabels = defineComponent({
  name: 'FormLabels',
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
          h('rect', {"x":"2.000000005000402","y":"5.000000003886271","width":"20","height":"5","rx":"1","ry":"1"}),
          h('rect', {"x":"2.000000005000402","y":"17.000000003886271","width":"20","height":"5","rx":"1","ry":"1"}),
          h('line', {"x1":"2.000000005000402","y1":"14.000000003886271","x2":"12.000000005000402","y2":"14.000000003886271"}),
          h('line', {"x1":"2.000000005000402","y1":"2.056394887018541","x2":"12.000000005000402","y2":"2.056394887018541"})
        ]
      );
  }
});

export default FormLabels;
export { FormLabels };
