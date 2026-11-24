import { defineComponent, h } from 'vue';

const FingerprintCurl = defineComponent({
  name: 'FingerprintCurl',
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
          h('path', {"d":"M18,16.999999999996362c-3.313708498799315,0-6-2.686291501197957-6-6"}),
          h('path', {"d":"M4,11c0-4.418277998400299,3.581722001599701-8,8-8s8,3.581722001599701,8,8"}),
          h('path', {"d":"M17.5,20.499999999996362c-5.246705123099673,0-9.5-4.253294876896689-9.5-9.499999999996362"}),
          h('path', {"d":"M16,10.999999999996362c0,1.104569499602803.895430500400835,2,2,2s2-.895430500397197,2-2"}),
          h('path', {"d":"M16,10.999999999996362c0-2.20916748046875-1.790832519529431-4-4-4s-4,1.79083251953125-4,4"}),
          h('path', {"d":"M4,10.999999999996362c0,4.02178955078125,1.827697753909888,7.61541748046875,4.696166992189319,10"})
        ]
      );
  }
});

export default FingerprintCurl;
export { FingerprintCurl };
