import { defineComponent, h } from 'vue';

const BagSide = defineComponent({
  name: 'BagSide',
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
          h('path', {"d":"M7.999999999770807,7.00000399606688l.00000000008913-1.000003999997716c.000000000200089-2.209136790192133,1.790859210179406-3.999995999842213,3.999996000360625-3.999995999642124h.00000799999907c2.209136790181219.000000000189175,3.999995999840394,1.790859210170311,3.999995999640305,3.999996000362444l-.00000000008913,1.000003999986802"}),
          h('polygon', {"points":"16 22.00000399642704 2 22.00000399642704 5 8.00000399642704 19 8.00000399642704 16 22.00000399642704"}),
          h('polyline', {"points":"16 22.00000399615783 22 22.000003996827218 19.000000000620275 8.00000399669625"})
        ]
      );
  }
});

export default BagSide;
export { BagSide };
