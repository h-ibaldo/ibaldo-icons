import { defineComponent, h } from 'vue';

const FormInputNumber = defineComponent({
  name: 'FormInputNumber',
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
          h('rect', {"x":"2","y":"5.999999999998181","width":"20","height":"12.000000000003638","rx":"2","ry":"2"}),
          h('polyline', {"points":"6 9.999999999998181 7 9.999999999998181 7 13.999999999998181"}),
          h('path', {"d":"M11,9.999999999998181h.585787851839996c.78104780245485,0,1.414212148160004.633164345706064,1.414212148160004,1.414212148160914v.000001999999768c0,.375072381823884-.148996923537197.734782775377425-.414213148160343.99999900000148l-1.585786851839657,1.585786851837838h2"}),
          h('path', {"d":"M17.000001000000339,11.999999999998181c.552284197545305,0,.999998999999661-.447714802454357.999998999999661-.999998999998752v-.000002000001587c0-.552284197545305-.447714802454357-.999998999999661-.999998999999661-.999998999999661h-1.000001000000339"}),
          h('path', {"d":"M16,13.999999999998181h1.000001000000339c.552284197545305,0,.999998999999661-.447714802454357.999998999999661-.999998999998752v-.000002000001587c0-.552284197545305-.447714802454357-.999998999999661-.999998999999661-.999998999999661"})
        ]
      );
  }
});

export default FormInputNumber;
export { FormInputNumber };
