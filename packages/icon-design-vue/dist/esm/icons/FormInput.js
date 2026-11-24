import { defineComponent, h } from 'vue';

const FormInput = defineComponent({
  name: 'FormInput',
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
          h('rect', {"x":"2","y":"6","width":"20","height":"12.000000000003638","rx":"2","ry":"2"}),
          h('line', {"x1":"10","y1":"13.989999999999782","x2":"10","y2":"14"}),
          h('line', {"x1":"6","y1":"13.989999999999782","x2":"6","y2":"14"}),
          h('line', {"x1":"14","y1":"13.989999999999782","x2":"14","y2":"14"})
        ]
      );
  }
});

export default FormInput;
export { FormInput };
