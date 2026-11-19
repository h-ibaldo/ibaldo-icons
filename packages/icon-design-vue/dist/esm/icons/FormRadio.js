import { defineComponent, h } from 'vue';

const FormRadio = defineComponent({
  name: 'FormRadio',
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
          h('line', {"x1":"18.000000000251021","y1":"11.999999995703547","x2":"22.000000000251021","y2":"11.999999995703547"}),
          h('circle', {"cx":"8.000000000251021","cy":"11.999999995703547","r":"6"})
        ]
      );
  }
});

export default FormRadio;
export { FormRadio };
