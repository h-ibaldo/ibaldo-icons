import { defineComponent, h } from 'vue';

const ChartBarCircleArrowRight = defineComponent({
  name: 'ChartBarCircleArrowRight',
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
          h('polyline', {"points":"5.974731440099276 18.000000003885361 7.974731440099276 20.000000003885361 5.974731440099276 22.000000003885361"}),
          h('line', {"x1":"1.974731440099276","y1":"20.000000003885361","x2":"7.974731440099276","y2":"20.000000003885361"}),
          h('path', {"d":"M11.974731440099276,22.000000003885361c5.522827148450233,0,10-4.477172851558862,10-10,0-5.52294921875-4.477172851549767-10-10-10C6.451904291659957,2.000000003885361,1.974731440099276,6.477050785135361,1.974731440099276,12.000000003885361c0,1.04541015625.161682128909888,2.052734375.459228515630457,3"}),
          h('rect', {"x":"5.974731440099276","y":"11.000000003885361","width":"4","height":"4"}),
          h('rect', {"x":"9.974731440099276","y":"7.000000003885361","width":"4","height":"8"}),
          h('rect', {"x":"13.974731440099276","y":"9.000000003885361","width":"4","height":"6"})
        ]
      );
  }
});

export default ChartBarCircleArrowRight;
export { ChartBarCircleArrowRight };
