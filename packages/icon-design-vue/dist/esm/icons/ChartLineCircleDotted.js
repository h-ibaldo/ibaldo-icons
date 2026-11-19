import { defineComponent, h } from 'vue';

const ChartLineCircleDotted = defineComponent({
  name: 'ChartLineCircleDotted',
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
          h('path', {"d":"M4.878417963270294,19.071044922358851c1.809631347649884,1.809631347648974,4.309631347649884,2.928955078121362,7.071044921869543,2.928955078121362,5.522827148440228,0,10-4.4771728515625,10-10,0-5.522888183590112-4.477172851559772-10-10-10"}),
          h('line', {"x1":"1.959462885140056","y1":"12.000000000480213","x2":"1.949462885139837","y2":"12.000000000480213","stroke-dasharray":".5 3.5"}),
          h('line', {"x1":"4.888395073119682","y1":"4.928932188769977","x2":"4.878395073119464","y2":"4.928932188769977","stroke-dasharray":".5 3.5"}),
          h('line', {"x1":"2.704057844930503","y1":"15.786486173899902","x2":"2.694057844930285","y2":"15.786486173899902","stroke-dasharray":".5 3.5"}),
          h('line', {"x1":"2.704057844930503","y1":"8.21351382704961","x2":"2.694057844930285","y2":"8.21351382704961","stroke-dasharray":".5 3.5"}),
          h('line', {"x1":"8.092353268470106","y1":"2.777990283899271","x2":"8.082353268469888","y2":"2.777990283899271","stroke-dasharray":".5 3.5"}),
          h('polyline', {"points":"6.949462885139837 15.000000000480213 9.949462885139837 11.000000000480213 13.949462885139837 14.000000000480213 16.949462885139837 10.000000000480213"})
        ]
      );
  }
});

export default ChartLineCircleDotted;
export { ChartLineCircleDotted };
