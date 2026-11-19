import { defineComponent, h } from 'vue';

const PencilTip = defineComponent({
  name: 'PencilTip',
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
          h('path', {"d":"M21.500000012390956,3.757359315659414l-1.17157289160059-1.171572883151384c-.781048584780365-.78104857911967-2.047378539469719-.781048576320245-2.828427120790366.000000006260962L2.99999999927968,17.085786445889426l-.99999999927968,4.999999999278771,4.99999999963984-.99999999963984,14.500000017849743-14.5c.78104858550978-.781048585500685.781048583230586-2.047378547191329-.000000005098627-2.828427129868942Z"}),
          h('line', {"x1":"14.99999999963984","y1":"5.085786445168196","x2":"19","y2":"9.085786445528356"}),
          h('line', {"x1":"3.99999999963984","y1":"16.085786445528356","x2":"8","y2":"20.085786445889426"})
        ]
      );
  }
});

export default PencilTip;
export { PencilTip };
