import { defineComponent, h } from 'vue';

const ClockCheck = defineComponent({
  name: 'ClockCheck',
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
          h('polyline', {"points":"2 19.999999999887223 4 21.999999999887223 8 17.999999999887223"}),
          h('path', {"d":"M10,21.792114257697904c.646850585939319.131896972659888,1.314147949220569.207885742189319,2,.207885742189319,5.522827148439319,0,10-4.477172851558862,10-10,0-5.522888183590112-4.477172851560681-10-10-10S2,6.477111816297111,2,11.999999999887223c0,1.425720214840112.31103515625,2.774047851560681.850830078119543,4"}),
          h('polyline', {"points":"12 6.999999999887223 12 11.999999999887223 17 11.999999999887223"})
        ]
      );
  }
});

export default ClockCheck;
export { ClockCheck };
