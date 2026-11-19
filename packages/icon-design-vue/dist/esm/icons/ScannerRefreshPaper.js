import { defineComponent, h } from 'vue';

const ScannerRefreshPaper = defineComponent({
  name: 'ScannerRefreshPaper',
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
          h('path', {"d":"M3.999999981180736,15.999996564258254h18v6H1.999999981180736v-4c0-1.103830048988002.896169951012-2,2-2Z"}),
          h('line', {"x1":"5.999999981180736","y1":"18.999996564258254","x2":"7.999999981180736","y2":"18.999996564258254"}),
          h('line', {"x1":"4.999999981180736","y1":"12.999996564258254","x2":"16.999999981180736","y2":"12.999996564258254"}),
          h('polyline', {"points":"1.999999981189831 1.999996564258254 1.999999981189831 4.999996564254616 4.999999981189831 4.999996564254616"}),
          h('path', {"d":"M3.385253887439831,8.999996564258254c.699035644529431.61737060546875,1.607360839840112,1,2.61474609375,1,2.209167480459655,0,4-1.7908935546875,4-4,0-2.20916748046875-1.790832519540345-4-4-4-1.861694335939319,0-3.412475585939319,1.27777099609375-3.858581542970569,3"}),
          h('path', {"d":"M21.999999981189831,15.999996564258254v-1.52789306640625c0-1.51507568359375-.856018066409888-2.900146484375-2.211120605470569-3.57769775390625l-6.788879394529431-3.3944091796875"})
        ]
      );
  }
});

export default ScannerRefreshPaper;
export { ScannerRefreshPaper };
