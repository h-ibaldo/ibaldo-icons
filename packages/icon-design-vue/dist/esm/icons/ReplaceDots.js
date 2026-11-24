import { defineComponent, h } from 'vue';

const ReplaceDots = defineComponent({
  name: 'ReplaceDots',
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
          h('g', {}, [
            h('polyline', {"points":"20.949462884873356 20.000000002186425 17.949462884873356 20.000000001917215 17.949462885142566 17.000000001917215"}),
            h('path', {"d":"M17.949462885142566,19.986389160636463c2.4248046875-1.82476806640625,4-4.71795654296875,4-7.98638916015625,0-4.83782958984375-3.435607910152612-8.87249755859375-8-9.79913330078125"}),
            h('line', {"x1":"9.949462885142566","y1":"2.010000000480431","x2":"9.949462885142566","y2":"2.000000000480213"})
          ]),
          h('g', {}, [
            h('polyline', {"points":"2.949462887028858 3.999999997784471 5.949462887028858 3.999999998322892 5.949462886490437 6.999999998322892"}),
            h('path', {"d":"M5.949462886757829,4.013610839603643c-2.42480468766189,1.824768066187971-4.000000000423825,4.71795654260859-4.000000000717591,7.98638915979609-.000000000433829,4.83782958984375,3.435607909362261,8.872497558902978,7.999999999120519,9.79913330150157"}),
            h('line', {"x1":"13.949462885142566","y1":"21.990000000479995","x2":"13.949462885142566","y2":"22.000000000480213"})
          ])
        ]
      );
  }
});

export default ReplaceDots;
export { ReplaceDots };
