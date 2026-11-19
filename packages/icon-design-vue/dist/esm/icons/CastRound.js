import { defineComponent, h } from 'vue';

const CastRound = defineComponent({
  name: 'CastRound',
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
          h('path', {"d":"M15,19.999999999998181h4c1.656854249489697,0,3-1.343145750506665,3-3V6.999999999998181c0-1.656854249493335-1.343145750510303-3-3-3H5c-1.656854249489697,0-3,1.343145750506665-3,3"}),
          h('path', {"d":"M3,19.999999999998181c0-.552284749799583-.447715250200417-1-1-1"}),
          h('path', {"d":"M7,19.999999999998181c0-2.761423749001551-2.238576251000268-5-5-5"}),
          h('path', {"d":"M11,19.999999999998181c0-4.970562748199882-4.029437251800118-9-9-9"})
        ]
      );
  }
});

export default CastRound;
export { CastRound };
