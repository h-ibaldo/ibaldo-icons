import { defineComponent, h } from 'vue';

const SunSpokeHuge = defineComponent({
  name: 'SunSpokeHuge',
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
          h('circle', {"cx":"12.000000000314685","cy":"12.000000005924903","r":"6.999999999999773"}),
          h('line', {"x1":"2.000000000314685","y1":"12.000000005475158","x2":"5.000000000314685","y2":"12.000000005611582"}),
          h('line', {"x1":"19.000000000314685","y1":"12.000000006239134","x2":"22.000000000314685","y2":"12.000000006373739"}),
          h('line', {"x1":"12.000000000763976","y1":"2.000000005924448","x2":"12.00000000062937","y2":"5.000000005924448"}),
          h('line', {"x1":"12","y1":"19.000000005924448","x2":"11.999999999865395","y2":"22.000000005924448"}),
          h('line', {"x1":"4.928932188611725","y1":"4.928932193897708","x2":"7.050252532117156","y2":"7.050252537512279"}),
          h('line', {"x1":"16.949747468512214","y1":"16.949747474336618","x2":"19.071067812015826","y2":"19.071067817953008"}),
          h('line', {"x1":"19.071067812341425","y1":"4.928932194223307","x2":"16.94974746873595","y2":"7.050252537726919"}),
          h('line', {"x1":"7.050252531903425","y1":"16.949747474121978","x2":"4.928932188287945","y2":"19.071067817627409"})
        ]
      );
  }
});

export default SunSpokeHuge;
export { SunSpokeHuge };
