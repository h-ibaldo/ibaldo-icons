import { defineComponent, h } from 'vue';

const ChartBarTrendUpThin = defineComponent({
  name: 'ChartBarTrendUpThin',
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
          h('polyline', {"points":"22.016630450790217 6.000000000658474 22.016630450973025 2.000000000658474 18.016630450973025 2.000000000480213"}),
          h('polyline', {"points":"22.016630450524644 2.000000000029104 16.016630450793855 8.000000000298314 13.516630450683806 5.500000000411092 8.516630450906632 10.500000000636646 6.016630450793855 8.000000000749424 2.016630450974844 12.000000000927685"}),
          h('line', {"x1":"22.01663045083842","y1":"9.999999999581632","x2":"22.016630451423225","y2":"22.000000000480213"}),
          h('line', {"x1":"18.01663045092937","y1":"11.999999999759893","x2":"18.016630451423225","y2":"22.000000000658474"}),
          h('line', {"x1":"14.016630451020319","y1":"13.999999999938154","x2":"14.016630451423225","y2":"22.000000000836735"}),
          h('line', {"x1":"10.016630451107631","y1":"16.000000000120053","x2":"10.016630451423225","y2":"22.000000001018634"}),
          h('line', {"x1":"6.01663045119858","y1":"18.000000000298314","x2":"6.016630451423225","y2":"22.000000001196895"}),
          h('line', {"x1":"2.01663045128862","y1":"20.000000000480213","x2":"2.016630451423225","y2":"22.000000001378794"})
        ]
      );
  }
});

export default ChartBarTrendUpThin;
export { ChartBarTrendUpThin };
