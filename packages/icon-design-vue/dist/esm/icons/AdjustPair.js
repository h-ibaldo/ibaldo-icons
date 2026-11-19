import { defineComponent, h } from 'vue';

const AdjustPair = defineComponent({
  name: 'AdjustPair',
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
          h('circle', {"cx":"9.00000000019736","cy":"17.000000019904292","r":"3"}),
          h('line', {"x1":"12.00000000019736","y1":"17.000000019904292","x2":"22.000000000193722","y2":"17.000000019904292"}),
          h('line', {"x1":"2.000000000194632","y1":"17.000000019904292","x2":"6.000000000194632","y2":"17.000000019904292"}),
          h('circle', {"cx":"15.000000000193722","cy":"7.000000019904292","r":"3"}),
          h('line', {"x1":"12.000000000193722","y1":"7.000000019904292","x2":"2.00000000019736","y2":"7.000000019904292"}),
          h('line', {"x1":"22.000000000194632","y1":"7.000000019904292","x2":"18.000000000194632","y2":"7.000000019904292"})
        ]
      );
  }
});

export default AdjustPair;
export { AdjustPair };
