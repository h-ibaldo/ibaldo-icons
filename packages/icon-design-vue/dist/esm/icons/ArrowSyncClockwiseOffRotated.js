import { defineComponent, h } from 'vue';

const ArrowSyncClockwiseOffRotated = defineComponent({
  name: 'ArrowSyncClockwiseOffRotated',
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
          h('polyline', {"points":"11.00000000036016 2 13.00000000036016 4 11.00000000036016 6"}),
          h('polyline', {"points":"13.000000000178261 22 11.00000000036016 19.999999999818101 13.000000000538421 18"}),
          h('line', {"x1":"4","y1":"20","x2":"20","y2":"4"}),
          h('path', {"d":"M12,20c4.41827392578125,0,8-3.581787109371362,8-8,0-2.209106445310681-.90277099609375-4.201904296871362-2.350463867189319-5.649536132810681"}),
          h('path', {"d":"M12,4c-4.41827392578125,0-8,3.581787109378638-8,8,0,2.209106445308862.90277099609375,4.201904296878638,2.350463867185681,5.649536132808862"})
        ]
      );
  }
});

export default ArrowSyncClockwiseOffRotated;
export { ArrowSyncClockwiseOffRotated };
