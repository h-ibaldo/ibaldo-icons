import { defineComponent, h } from 'vue';

const TouchSwipeRightTwoFingersGap = defineComponent({
  name: 'TouchSwipeRightTwoFingersGap',
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
          h('polyline', {"points":"19.000000000129148 2.999999999865395 22 6 18.999999999869033 8.999999999865395"}),
          h('line', {"x1":"14","y1":"5.99999999963984","x2":"22","y2":"6"}),
          h('circle', {"cx":"5.999999999997272","cy":"5.99999999928059","r":"4.000000000001819"}),
          h('polyline', {"points":"19.000000000129148 14.999999999865395 22 18 18.999999999869033 20.999999999865395"}),
          h('line', {"x1":"14","y1":"17.99999999963984","x2":"22","y2":"18"}),
          h('circle', {"cx":"5.999999999997272","cy":"17.99999999928059","r":"4.000000000001819"})
        ]
      );
  }
});

export default TouchSwipeRightTwoFingersGap;
export { TouchSwipeRightTwoFingersGap };
