import { defineComponent, h } from 'vue';

const DotsDiamond = defineComponent({
  name: 'DotsDiamond',
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
          h('rect', {"x":"4.221825375546285","y":"4.219387443182239","width":"15.556349186088632","height":"15.556349186088632","rx":"2.499999999998875","ry":"2.499999999998875","transform":"translate(-4.96883885696025 11.999285914731155) rotate(-44.999999999992944)"}),
          h('line', {"x1":"11.999999968586053","y1":"11.987562036226336","x2":"11.999999968586053","y2":"11.997562036226554"}),
          h('line', {"x1":"7.999999968586053","y1":"11.987562036226336","x2":"7.999999968586053","y2":"11.997562036226554"}),
          h('line', {"x1":"15.999999968586053","y1":"11.987562036226336","x2":"15.999999968586053","y2":"11.997562036226554"})
        ]
      );
  }
});

export default DotsDiamond;
export { DotsDiamond };
