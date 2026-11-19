import { defineComponent, h } from 'vue';

const ArrowSyncClockwise2 = defineComponent({
  name: 'ArrowSyncClockwise2',
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
          h('polyline', {"points":"22.000000000130058 9 19.000000000260115 12.000000000138243 16.000000000130058 9.00000000026921"}),
          h('path', {"d":"M19,12v-3c0-3.865966796880457-3.133972167969659-7-7-7-3.525512695309772,0-6.43408203125,2.609008789058862-6.920471191409888,6"}),
          h('polyline', {"points":"2 14.999999999379725 5.000000000140062 11.999999999508873 8 14.999999999648935"}),
          h('path', {"d":"M5.000000000400178,11.999999999648935l-.00000000027012,3c-.000000000340151,3.865966796869543,3.133972167340289,7.000000000280124,6.999999999379725,7.000000000631189,3.525512695309772.000000000309228,6.434082031480102-2.609008788491337,6.920471191940123-5.999999999381544"})
        ]
      );
  }
});

export default ArrowSyncClockwise2;
export { ArrowSyncClockwise2 };
