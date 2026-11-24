import { defineComponent, h } from 'vue';

const ChartTrendUpSquareDot = defineComponent({
  name: 'ChartTrendUpSquareDot',
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
          h('path', {"d":"M21.949462885139837,10.000000000298314v7c0,2.761423749150708-2.238576250850201,5-5,5H6.949462885139837c-2.761423749149799,0-5-2.238576250849292-5-5V7.000000000298314c0-2.761423749150708,2.238576250850201-5,5-5h7"}),
          h('circle', {"cx":"19.449462885139837","cy":"4.500000000298314","r":"2.5"}),
          h('polyline', {"points":"6.949462885139837 16.000000000480213 9.949462885139837 13.000000000480213 11.949462885139837 15.000000000480213 16.949462885139837 10.000000000480213"}),
          h('polyline', {"points":"16.949462885139837 13.000000000480213 16.949462885139837 10.000000000480213 13.949462885139837 10.000000000480213"})
        ]
      );
  }
});

export default ChartTrendUpSquareDot;
export { ChartTrendUpSquareDot };
