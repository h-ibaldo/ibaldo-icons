import { defineComponent, h } from 'vue';

const ClockArrowUp = defineComponent({
  name: 'ClockArrowUp',
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
          h('line', {"x1":"5","y1":"21.999999999887223","x2":"5","y2":"13.999999999887223"}),
          h('polyline', {"points":"8 16.999999999887223 5 13.999999999887223 2 16.999999999887223"}),
          h('polyline', {"points":"12 6.999999999887223 12 11.999999999887223 17 11.999999999887223"}),
          h('path', {"d":"M10,21.792114257697904c.646850585939319.131958007810681,1.314147949220569.207885742189319,2,.207885742189319,5.522888183590112,0,10-4.477172851558862,10-10,0-5.522827148439319-4.477111816409888-10-10-10C6.814758300779431,1.999999999887223,2.552368164060681,5.946777343637223,2.050476074220569,10.999999999887223"})
        ]
      );
  }
});

export default ClockArrowUp;
export { ClockArrowUp };
