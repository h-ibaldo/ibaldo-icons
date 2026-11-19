import { defineComponent, h } from 'vue';

const CloudDownloadLarge = defineComponent({
  name: 'CloudDownloadLarge',
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
          h('path', {"d":"M17,15.999999999998181h1c2.209167480470569,0,4-1.790832519540345,4-4,0-2.209167480479664-1.790832519529431-4-4-4h-.025207519529431c.014892578119543-.164916992180224.025207519529431-.331176757809772.025207519529431-.5,0-3.037536621090112-2.462463378909888-5.5-5.5-5.5-2.138366699220569,0-3.987365722659888,1.222900390630457-4.897277832040345,3.005187988270336-.034545898430224-.000610351560681-.068054199209655-.005187988270336-.102722167959655-.005187988270336-3.037536621101026,0-5.5,2.462463378909888-5.5,5.5,0,2.868713378909888,2.197143554680224,5.221862792959655,5,5.474792480459655"}),
          h('polyline', {"points":"9 19.000000026499038 11.999999978359483 22.000000026499038 15 19.000000026499038"}),
          h('line', {"x1":"11.999999985579052","y1":"11.000000026499038","x2":"11.999999985579052","y2":"22.000000026499038"})
        ]
      );
  }
});

export default CloudDownloadLarge;
export { CloudDownloadLarge };
