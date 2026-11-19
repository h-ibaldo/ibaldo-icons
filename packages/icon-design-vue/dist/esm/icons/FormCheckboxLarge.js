import { defineComponent, h } from 'vue';

const FormCheckboxLarge = defineComponent({
  name: 'FormCheckboxLarge',
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
          h('rect', {"x":"1.999999995794496","y":"5.998779324585485","width":"12.000000013754288","height":"11.999999973355443","rx":".999999999999889","ry":".999999999999889"}),
          h('line', {"x1":"18.000000014479156","y1":"11.998779303612537","x2":"22.000000014479156","y2":"11.998779303612537"})
        ]
      );
  }
});

export default FormCheckboxLarge;
export { FormCheckboxLarge };
