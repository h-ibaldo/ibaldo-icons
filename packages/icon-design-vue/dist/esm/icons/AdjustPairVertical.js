import { defineComponent, h } from 'vue';

const AdjustPairVertical = defineComponent({
  name: 'AdjustPairVertical',
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
          h('circle', {"cx":"17.000000000184627","cy":"15.000000019901563","r":"3"}),
          h('line', {"x1":"17.000000000184627","y1":"12.000000019901563","x2":"17.000000000184627","y2":"2.000000019906111"}),
          h('line', {"x1":"17.000000000184627","y1":"22.000000019904292","x2":"17.000000000184627","y2":"18.000000019904292"}),
          h('circle', {"cx":"7.000000000184627","cy":"9.000000019906111","r":"3"}),
          h('line', {"x1":"7.000000000184627","y1":"12.000000019906111","x2":"7.000000000184627","y2":"22.000000019901563"}),
          h('line', {"x1":"7.000000000184627","y1":"2.000000019904292","x2":"7.000000000184627","y2":"6.000000019904292"})
        ]
      );
  }
});

export default AdjustPairVertical;
export { AdjustPairVertical };
