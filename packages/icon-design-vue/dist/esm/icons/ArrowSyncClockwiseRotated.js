import { defineComponent, h } from 'vue';

const ArrowSyncClockwiseRotated = defineComponent({
  name: 'ArrowSyncClockwiseRotated',
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
          h('polyline', {"points":"11 2 13 4 11 6"}),
          h('polyline', {"points":"12.99999999981992 22 11 19.999999999818101 13.00000000018008 18"}),
          h('path', {"d":"M16.775806124480368,5.581312473917933c1.956869189460122,1.458376179940387,3.224193875519632,3.790532082850405,3.224193875519632,6.418687526082067,0,4.418277998400299-3.581722001599701,8-8,8"}),
          h('path', {"d":"M7.224193874950288,18.418687525638234c-1.956869189340068-1.458376180107734-3.224193875190394-3.79053208312871-3.224193874950288-6.418687526358553.000000000400178-4.418277998400299,3.581722002320021-7.999999999679858,8.00000000072032-7.99999999927968"})
        ]
      );
  }
});

export default ArrowSyncClockwiseRotated;
export { ArrowSyncClockwiseRotated };
