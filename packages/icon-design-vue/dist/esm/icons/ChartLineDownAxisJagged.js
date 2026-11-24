import { defineComponent, h } from 'vue';

const ChartLineDownAxisJagged = defineComponent({
  name: 'ChartLineDownAxisJagged',
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
          h('polyline', {"points":"2 2 2 22 22 22"}),
          h('polyline', {"points":"22.000000000320142 17.99999999963984 19.000000000050932 11.999999999770807 17.00000000018008 14.999999999869033 13.999999999909051 9 10.000000000090949 13.000000000178261 5.999999999690772 4.00000000036016"})
        ]
      );
  }
});

export default ChartLineDownAxisJagged;
export { ChartLineDownAxisJagged };
