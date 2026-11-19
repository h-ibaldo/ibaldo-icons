import { defineComponent, h } from 'vue';

const AdjustVerticalBlock = defineComponent({
  name: 'AdjustVerticalBlock',
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
          h('line', {"x1":"18.999999990796823","y1":"9.99999999973079","x2":"18.999999990083779","y2":"21.99999999973079"}),
          h('line', {"x1":"18.99999999035208","y1":"1.99999999973079","x2":"18.999999990218384","y2":"4.99999999973079"}),
          h('rect', {"x":"16.499999990796823","y":"4.49999999973079","width":"5","height":"6","rx":"1","ry":"1","transform":"translate(26.499999990527613 -11.499999991066034) rotate(90)"}),
          h('rect', {"x":"9.499999990796823","y":"13.49999999973079","width":"5","height":"6","rx":"1","ry":"1","transform":"translate(28.499999990527613 4.500000008933965) rotate(90)"}),
          h('line', {"x1":"4.999999990796823","y1":"9.99999999973079","x2":"4.999999990083779","y2":"21.99999999973079"}),
          h('line', {"x1":"4.99999999035208","y1":"1.99999999973079","x2":"4.999999990218384","y2":"4.99999999973079"}),
          h('rect', {"x":"2.499999990796823","y":"4.49999999973079","width":"5","height":"6","rx":"1","ry":"1","transform":"translate(12.499999990527613 2.500000008933966) rotate(90)"}),
          h('line', {"x1":"11.99999998990188","y1":"13.999999999547981","x2":"11.999999991691766","y2":"1.99999999973079"}),
          h('line', {"x1":"11.999999990594915","y1":"21.99999999973079","x2":"11.999999990998731","y2":"18.999999999547981"})
        ]
      );
  }
});

export default AdjustVerticalBlock;
export { AdjustVerticalBlock };
