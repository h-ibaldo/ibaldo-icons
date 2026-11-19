import { defineComponent, h } from 'vue';

const ChartTrendUpCircleArrowRight = defineComponent({
  name: 'ChartTrendUpCircleArrowRight',
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
          h('polyline', {"points":"5.949462885139837 18.000000000298314 7.949462885139837 20.000000000298314 5.949462885139837 22.000000000298314"}),
          h('line', {"x1":"1.949462885139837","y1":"20.000000000298314","x2":"7.949462885139837","y2":"20.000000000298314"}),
          h('path', {"d":"M11.949462885139837,22.000000000298314c5.522827148440228,0,10-4.477172851558862,10-10,0-5.52294921875-4.477172851559772-10-10-10S1.949462885139837,6.477050781548314,1.949462885139837,12.000000000298314c0,1.04541015625.161682128909888,2.052734375.459228515620453,3"}),
          h('polyline', {"points":"7.949462885139837 14.000000000480213 9.949462885139837 12.000000000480213 11.949462885139837 14.000000000480213 16.949462885139837 9.000000000480213"}),
          h('polyline', {"points":"16.949462885139837 12.000000000480213 16.949462885139837 9.000000000480213 13.949462885139837 9.000000000480213"})
        ]
      );
  }
});

export default ChartTrendUpCircleArrowRight;
export { ChartTrendUpCircleArrowRight };
