import { defineComponent, h } from 'vue';

const AdjustVerticalTick = defineComponent({
  name: 'AdjustVerticalTick',
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
          h('line', {"x1":"11.999999989492608","y1":"16.000000000137334","x2":"11.999999991874574","y2":"2.0000000004502"}),
          h('line', {"x1":"11.999999988281161","y1":"22.0000000004502","x2":"11.999999988686795","y2":"20.000000000137334"}),
          h('line', {"x1":"4.999999990125616","y1":"11.999999999187821","x2":"4.999999988281161","y2":"21.999999999187821"}),
          h('line', {"x1":"4.999999991874574","y1":"1.999999999187821","x2":"4.999999990929609","y2":"7.999999999187821"}),
          h('line', {"x1":"18.999999990754077","y1":"12.00000000107957","x2":"18.999999988911441","y2":"22.000000001699846"}),
          h('line', {"x1":"18.999999991874574","y1":"2.000000001708941","x2":"18.999999990929609","y2":"8.00000000107957"}),
          h('line', {"x1":"21.999999990797733","y1":"8.000000001477929","x2":"15.999999990798642","y2":"8.000000000667569"}),
          h('line', {"x1":"14.999999989719072","y1":"16.000000000538421","x2":"8.999999989719072","y2":"15.99999999973079"}),
          h('line', {"x1":"7.999999990796823","y1":"7.999999999598913","x2":"1.999999990796823","y2":"7.999999998787644"})
        ]
      );
  }
});

export default AdjustVerticalTick;
export { AdjustVerticalTick };
