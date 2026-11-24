import { defineComponent, h } from 'vue';

const DownloadSquareOpenPlain = defineComponent({
  name: 'DownloadSquareOpenPlain',
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
          h('polyline', {"points":"8.949462885140747 11.000000000480213 11.949462885140747 14.000000000480213 14.949462885140747 11.000000000480213"}),
          h('path', {"d":"M11.949462885140747,13.000000000480213V5.000000000480213c0-1.656854249493335,1.343145750512122-3,3-3h4c1.656854249493335,0,3,1.343145750506665,3,3v14c0,1.656854249489697-1.343145750506665,3-3,3H4.949462885140747c-1.656854249487878,0-3-1.343145750506665-3-3V5.000000000480213c0-1.656854249493335,1.343145750512122-3,3-3h3"})
        ]
      );
  }
});

export default DownloadSquareOpenPlain;
export { DownloadSquareOpenPlain };
