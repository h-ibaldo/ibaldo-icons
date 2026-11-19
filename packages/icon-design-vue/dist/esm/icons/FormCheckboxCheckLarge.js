import { defineComponent, h } from 'vue';

const FormCheckboxCheckLarge = defineComponent({
  name: 'FormCheckboxCheckLarge',
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
          h('rect', {"x":"2.025268551144109","y":"5.998779324585485","width":"12.000000013759745","height":"11.999999973355443","rx":".999999999993439","ry":".999999999993439"}),
          h('line', {"x1":"18.025268569828768","y1":"11.998779303612537","x2":"22.025268569828768","y2":"11.998779303612537"}),
          h('polyline', {"points":"6.025268561499615 11.99877929957438 7.525268569828768 13.498779303612537 10.025268561488701 10.498779303612537"})
        ]
      );
  }
});

export default FormCheckboxCheckLarge;
export { FormCheckboxCheckLarge };
