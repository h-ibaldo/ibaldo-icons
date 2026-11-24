import { defineComponent, h } from 'vue';

const BriefcaseFlapCurve = defineComponent({
  name: 'BriefcaseFlapCurve',
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
          h('rect', {"x":"2","y":"6.999999999998181","width":"20","height":"14","rx":"2","ry":"2"}),
          h('path', {"d":"M8,6.999999999998181v-2c0-1.104569499659192.895430500340808-2,2-2h4c1.104569499659192,0,2,.895430500340808,2,2v2"}),
          h('path', {"d":"M2,11.999999999998181l1.055728090001139.52786404499966c5.630549813338803,2.815274906670311,12.257994006668014,2.815274906670311,17.888543820008636,0l1.055728089990225-.52786404499966"})
        ]
      );
  }
});

export default BriefcaseFlapCurve;
export { BriefcaseFlapCurve };
