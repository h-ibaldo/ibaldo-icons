import { defineComponent, h } from 'vue';

const TrashEmptyPeak = defineComponent({
  name: 'TrashEmptyPeak',
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
          h('path', {"d":"M4.999999990410288,8.000000001077751l.00000000062937,11.99999999981992c.000000000050932,1.104569499661011.895430500420844,1.999999999959982,2.000000000090949,1.999999999911779l10-.0000000004502c1.104569499659192-.000000000049113,1.999999999959982-.89543050042812,1.999999999909051-2.00000000008913l-.00000000062937-11.999999999821739"}),
          h('polyline', {"points":"19.999999990410288 4.00000000018008 15.000041803419663 4.00000000044929 13.999999990410288 2.000000000448381 9.999999990410288 2.000000000538421 9.000008131559298 4.000000000673936 3.999999990410288 4.000000000988621"})
        ]
      );
  }
});

export default TrashEmptyPeak;
export { TrashEmptyPeak };
