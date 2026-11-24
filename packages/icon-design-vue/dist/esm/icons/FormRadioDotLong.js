import { defineComponent, h } from 'vue';

const FormRadioDotLong = defineComponent({
  name: 'FormRadioDotLong',
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
          h('circle', {"cx":"5.999999991070581","cy":"12","r":"4"}),
          h('line', {"x1":"14","y1":"12","x2":"22","y2":"12"}),
          h('line', {"x1":"6.009999991070799","y1":"12","x2":"6","y2":"12"})
        ]
      );
  }
});

export default FormRadioDotLong;
export { FormRadioDotLong };
