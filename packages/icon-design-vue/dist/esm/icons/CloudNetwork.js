import { defineComponent, h } from 'vue';

const CloudNetwork = defineComponent({
  name: 'CloudNetwork',
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
          h('line', {"x1":"5","y1":"21.999999999718057","x2":"19","y2":"21.999999999718057"}),
          h('line', {"x1":"12","y1":"16.999999999718057","x2":"12","y2":"21.999999999718057"}),
          h('path', {"d":"M18,8.999999999718057h-.025207519530341c.014892578120453-.164916992180224.025207519530341-.331176757810681.025207519530341-.5,0-3.037536621090112-2.462463378909888-5.5-5.5-5.5-2.138366699219659,0-3.987365722659888,1.222900390631366-4.897277832030341,3.005187988270336-.034545898439319-.000610351560681-.068054199219659-.005187988270336-.102722167969659-.005187988270336-3.037536621100116,0-5.5,2.462463378909888-5.5,5.5,0,3.037536621099207,2.462463378899884,5.5,5.5,5.5h10.5c2.209167480469659,0,4-1.790832519540345,4-4,0-2.209167480479664-1.790832519530341-4-4-4Z"})
        ]
      );
  }
});

export default CloudNetwork;
export { CloudNetwork };
