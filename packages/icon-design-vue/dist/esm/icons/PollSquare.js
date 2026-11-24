import { defineComponent, h } from 'vue';

const PollSquare = defineComponent({
  name: 'PollSquare',
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
          h('line', {"x1":"5.99999999955071","y1":"17.99999999955071","x2":"5.99999999991087","y2":"9.99999999955071"}),
          h('line', {"x1":"13.99999999955071","y1":"17.999999999907232","x2":"13.999999999690772","y2":"14.999999999907232"}),
          h('line', {"x1":"17.99999999955071","y1":"18.00000000008913","x2":"17.999999999770807","y2":"13.00000000008913"}),
          h('line', {"x1":"9.99999999955071","y1":"17.999999999728971","x2":"10.000000000090949","y2":"5.999999999728971"}),
          h('rect', {"x":"1.99999999981992","y":"1.999999999818101","width":"20","height":"20","rx":"2.000000000000455","ry":"2.000000000000455","transform":"translate(-.000000000538419 23.999999999097781) rotate(-89.999999997420559)"})
        ]
      );
  }
});

export default PollSquare;
export { PollSquare };
