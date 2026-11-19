import { defineComponent, h } from 'vue';

const CloudArrowUpRound = defineComponent({
  name: 'CloudArrowUpRound',
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
          h('path', {"d":"M16.9771728515625,13.048095676607772c-.230346679689319-2.82556152341931-2.592224121095569-5.048095703110448-5.477172851564319-5.048095703110448s-5.246826171875,2.222534179691138-5.477172851560681,5.048095703110448c-2.257751464845569.24133300783069-4.022827148439319,2.130065917979664-4.022827148439319,4.451904296889552,0,2.485290527340112,2.01470947265625,4.5,4.5,4.5h10c2.48529052734375,0,4.5-2.014709472659888,4.5-4.5,0-2.321838378909888-1.76507568359375-4.210571289058862-4.022827148435681-4.451904296889552Z"}),
          h('polyline', {"points":"15.999999999998181 4.999999973497324 18.999999999998181 1.999999973497324 21.999999999998181 4.999999973497324"}),
          h('line', {"x1":"18.999999999998181","y1":"7.999999973497324","x2":"18.999999999998181","y2":"1.999999973497324"})
        ]
      );
  }
});

export default CloudArrowUpRound;
export { CloudArrowUpRound };
