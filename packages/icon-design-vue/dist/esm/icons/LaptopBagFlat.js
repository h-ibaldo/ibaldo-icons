import { defineComponent, h } from 'vue';

const LaptopBagFlat = defineComponent({
  name: 'LaptopBagFlat',
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
          h('path', {"d":"M7.000000003161404,6.998782736171052h-2c-.552284749828686,0-1,.447715250171314-1,1v9c0,.552284749832324.447715250171314,1,1,1h14c.552284749830505,0,1-.447715250167676,1-1"}),
          h('line', {"x1":"2.000000003161404","y1":"21.998782736171052","x2":"22.000000003161404","y2":"21.998782736171052"}),
          h('rect', {"x":"11.000000003161404","y":"5.998782736171052","width":"11","height":"7","rx":"1","ry":"1"}),
          h('path', {"d":"M14.000000003161404,7.998782736171052v-2.999999999992724c0-1.104569499661011.895430500331713-2.000000000007276,2-2.000000000007276h1c1.104569499661011,0,1.999999999979991.895430500335351,1.999999999979991,1.999999999996362l.000000000020009,3.000000000003638"})
        ]
      );
  }
});

export default LaptopBagFlat;
export { LaptopBagFlat };
