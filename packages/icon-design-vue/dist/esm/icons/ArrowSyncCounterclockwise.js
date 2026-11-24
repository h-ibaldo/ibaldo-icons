import { defineComponent, h } from 'vue';

const ArrowSyncCounterclockwise = defineComponent({
  name: 'ArrowSyncCounterclockwise',
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
          h('polyline', {"points":"2 11 4 13 6 11"}),
          h('polyline', {"points":"22.000000000100954 12.999999999818101 19.999999999919055 11 18.000000000100954 13.000000000178261"}),
          h('path', {"d":"M5.581312473929756,16.775806124469455c1.458376179940387,1.956869189469217,3.790532082850405,3.224193875530545,6.418687526070244,3.224193875530545,4.41827799839848,0,7.999999999999091-3.581722001599701,7.999999999999091-8"}),
          h('path', {"d":"M18.418687525648238,7.224193874939374c-1.458376180108644-1.956869189329154-3.790532083139624-3.224193875179481-6.418687526358553-3.224193874939374-4.41827799839939.000000000389264-7.999999999679858,3.581722002309107-7.999999999289685,8.000000000709406"})
        ]
      );
  }
});

export default ArrowSyncCounterclockwise;
export { ArrowSyncCounterclockwise };
