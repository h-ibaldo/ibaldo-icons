import { defineComponent, h } from 'vue';

const ArrowCounterclockwiseBottom = defineComponent({
  name: 'ArrowCounterclockwiseBottom',
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
          h('polyline', {"points":"20.0000000004502 21.999999999959982 20.000000000130058 17.99999999963984 15.99999999981992 17.999999999959982"}),
          h('path', {"d":"M21.949523925819449,12.999999999548891c.032653808581017-.328979492180224.050476074190556-.662414550779431.050476074180551-1-.000000000250111-5.522827148430224-4.477172852019976-9.999999999799911-10.0000000004502-9.999999999548891-5.522827148440228.000000000249202-9.999999999799911,4.477172852009971-9.9999999995498,10.00000000044929.000000000240107,5.522827148439319,4.477172852009971,9.999999999799911,10.0000000004502,9.99999999955071,3.268432617179315-.000000000150976,6.161621093669964-1.575195312771029,7.986389159969804-4.00000000036016"})
        ]
      );
  }
});

export default ArrowCounterclockwiseBottom;
export { ArrowCounterclockwiseBottom };
