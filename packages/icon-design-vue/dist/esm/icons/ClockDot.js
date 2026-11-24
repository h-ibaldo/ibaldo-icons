import { defineComponent, h } from 'vue';

const ClockDot = defineComponent({
  name: 'ClockDot',
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
          h('polyline', {"points":"12 6.999999999887223 12 11.999999999887223 17 11.999999999887223"}),
          h('circle', {"cx":"18.5","cy":"18.499999999887223","r":"3.5"}),
          h('path', {"d":"M21.085571289060681,16.159362792857792c.581481933599207-1.267822265630457.914428710939319-2.673278808599207.914428710939319-4.159362792970569,0-5.522888183590112-4.477172851560681-10-10-10S2,6.477111816297111,2,11.999999999887223c0,5.522827148441138,4.477172851560681,10,10,10,1.486083984369543,0,2.891540527340112-.332946777340112,4.159362792970569-.914428710939319"})
        ]
      );
  }
});

export default ClockDot;
export { ClockDot };
