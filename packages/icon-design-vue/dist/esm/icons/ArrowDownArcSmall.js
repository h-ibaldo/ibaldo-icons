import { defineComponent, h } from 'vue';

const ArrowDownArcSmall = defineComponent({
  name: 'ArrowDownArcSmall',
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
          h('polyline', {"points":"8.00000000018008 11.000000000842192 12.00000000018008 15.000000000842192 16.00000000018008 11.000000000842192"}),
          h('line', {"x1":"12.00000000018008","y1":"3.000000000842192","x2":"12.00000000018008","y2":"15.000000000842192"}),
          h('path', {"d":"M6.08984375018008,16.000000000842192c.47705078125,2.83660888671875,2.93798828125,5,5.91015625,5s5.43310546875-2.16339111328125,5.91015625-5"})
        ]
      );
  }
});

export default ArrowDownArcSmall;
export { ArrowDownArcSmall };
