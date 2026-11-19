import { defineComponent, h } from 'vue';

const ClockSnooze = defineComponent({
  name: 'ClockSnooze',
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
          h('path', {"d":"M11,21.949523925668473c.328979492189319.032653808590112.662414550779431.05047607421875,1,.05047607421875,5.522827148439319,0,10-4.477172851558862,10-10,0-5.522888183590112-4.477172851560681-10-10-10S2,6.477111816297111,2,11.999999999887223c0,.337585449220569.017822265619543.671020507810681.050476074220569,1"}),
          h('polyline', {"points":"12 6.999999999887223 12 11.999999999887223 17 11.999999999887223"}),
          h('polyline', {"points":"3 16.999999999887223 7 16.999999999887223 3 21.999999999887223 7 21.999999999887223"})
        ]
      );
  }
});

export default ClockSnooze;
export { ClockSnooze };
