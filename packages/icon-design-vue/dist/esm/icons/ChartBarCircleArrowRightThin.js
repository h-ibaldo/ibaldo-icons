import { defineComponent, h } from 'vue';

const ChartBarCircleArrowRightThin = defineComponent({
  name: 'ChartBarCircleArrowRightThin',
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
          h('polyline', {"points":"6 18.000000000480213 8 20.000000000480213 6 22.000000000480213"}),
          h('line', {"x1":"2","y1":"20.000000000480213","x2":"8","y2":"20.000000000480213"}),
          h('path', {"d":"M12,22.000000000480213c5.522827148450233,0,10-4.4771728515625,10-10,0-5.52294921875-4.477172851549767-10-10-10C6.477172851560681,2.000000000480213,2,6.477050781730213,2,12.000000000480213c0,1.04541015625.161682128909888,2.052734375.459228515630457,3"}),
          h('line', {"x1":"8","y1":"14.000000000480213","x2":"8","y2":"11.000000000480213"}),
          h('line', {"x1":"12","y1":"14.000000000480213","x2":"12","y2":"8.000000000480213"}),
          h('line', {"x1":"16","y1":"14.000000000480213","x2":"16","y2":"10.000000000480213"})
        ]
      );
  }
});

export default ChartBarCircleArrowRightThin;
export { ChartBarCircleArrowRightThin };
