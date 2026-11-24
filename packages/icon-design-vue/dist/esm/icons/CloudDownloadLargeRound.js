import { defineComponent, h } from 'vue';

const CloudDownloadLargeRound = defineComponent({
  name: 'CloudDownloadLargeRound',
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
          h('polyline', {"points":"9.000000000001819 18.999999999998181 11.999999978361302 21.999999999998181 15.000000000001819 18.999999999998181"}),
          h('line', {"x1":"11.99999998558269","y1":"10.999999999998181","x2":"11.99999998558269","y2":"21.999999999998181"}),
          h('path', {"d":"M17.000000000001819,15.999999999998181h.5c2.4853515625,0,4.5-2.014709472659888,4.5-4.5,0-2.342651367200233-1.796630859380457-4.244812011720569-4.08349609375-4.4580078125-.459716796880457-2.857177734380457-2.9296875-5.0419921875-5.91650390625-5.0419921875s-5.456787109380457,2.184814453119543-5.91650390625,5.0419921875c-2.286865234380457.213195800779431-4.08349609375,2.115356445299767-4.08349609375,4.4580078125,0,2.485290527340112,2.0146484375,4.5,4.5,4.5h.5"})
        ]
      );
  }
});

export default CloudDownloadLargeRound;
export { CloudDownloadLargeRound };
