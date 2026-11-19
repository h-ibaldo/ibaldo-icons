import { defineComponent, h } from 'vue';

const AlertCircleSmall = defineComponent({
  name: 'AlertCircleSmall',
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
          h('circle', {"cx":"12.000000005000402","cy":"12.000000003886953","r":"8.000000000000341"}),
          h('line', {"x1":"12.000000005000402","y1":"15.010000003887399","x2":"12.000000005000402","y2":"15.000000003886271"}),
          h('line', {"x1":"12.000000005000402","y1":"9.000000003886271","x2":"12.000000005000402","y2":"12.000000003886271"})
        ]
      );
  }
});

export default AlertCircleSmall;
export { AlertCircleSmall };
