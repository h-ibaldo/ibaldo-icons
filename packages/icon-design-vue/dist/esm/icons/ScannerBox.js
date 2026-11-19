import { defineComponent, h } from 'vue';

const ScannerBox = defineComponent({
  name: 'ScannerBox',
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
          h('polygon', {"points":"1.999999981189831 10.999996564258254 1.999999981189831 16.999996564258254 17.999999981189831 7.999996564258254 17.999999981189831 1.999996564258254 1.999999981189831 10.999996564258254"}),
          h('path', {"d":"M1.999999981189831,16.999996564258254h20v3c0,1.103830048988002-.896169951011998,2-2,2H3.999999981189831c-1.103830048988,0-2-.896169951011998-2-2v-3h0Z"}),
          h('line', {"x1":"17.999999981189831","y1":"18.999996564258254","x2":"17.999999981189831","y2":"16.999996564258254"}),
          h('line', {"x1":"14.999999981189831","y1":"10.999996564258254","x2":"14.999999981189831","y2":"16.999996564258254"}),
          h('polyline', {"points":"1.999999981189831 16.999996564258254 21.999999981189831 16.999996564258254 21.999999981189831 10.999996564258254 12.666686992899486 10.999996564258254"})
        ]
      );
  }
});

export default ScannerBox;
export { ScannerBox };
