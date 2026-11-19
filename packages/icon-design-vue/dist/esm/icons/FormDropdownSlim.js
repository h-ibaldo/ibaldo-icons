import { defineComponent, h } from 'vue';

const FormDropdownSlim = defineComponent({
  name: 'FormDropdownSlim',
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
          h('rect', {"x":"1.974731444090139","y":"8.99999999557258","width":"20","height":"5.999999999996362","rx":"1","ry":"1"}),
          h('line', {"x1":"15.974731444090139","y1":"8.99999999557258","x2":"15.974731444090139","y2":"14.999999995568942"})
        ]
      );
  }
});

export default FormDropdownSlim;
export { FormDropdownSlim };
