import { defineComponent, h } from 'vue';

const Lifebuoy = defineComponent({
  name: 'Lifebuoy',
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
          h('line', {"x1":"13.967244584106083","y1":"21.831826341574924","x2":"13.967244584106083","y2":"16.610634935324924"}),
          h('line', {"x1":"9.967244584106083","y1":"16.610634935324924","x2":"9.967244584106083","y2":"21.831826341574924"}),
          h('line', {"x1":"9.967244584106083","y1":"2.233681810324924","x2":"9.967244584106083","y2":"7.454873216574924"}),
          h('line', {"x1":"13.967244584106083","y1":"7.454873216574924","x2":"13.967244584106083","y2":"2.233681810324924"}),
          h('line', {"x1":"16.545125443481083","y1":"14.032754075946286","x2":"21.766377884888243","y2":"14.032754075946286"}),
          h('line', {"x1":"21.766377884888243","y1":"10.032754075946286","x2":"16.545125443481083","y2":"10.032754075946286"}),
          h('line', {"x1":"2.168111283324833","y1":"14.032754075946286","x2":"7.389363724731083","y2":"14.032754075946286"}),
          h('line', {"x1":"7.389363724731083","y1":"10.032754075946286","x2":"2.168111283324833","y2":"10.032754075946286"}),
          h('circle', {"cx":"11.967244584106083","cy":"12.032754075946286","r":"5"}),
          h('circle', {"cx":"11.967244584106083","cy":"12.032754075946286","r":"10"})
        ]
      );
  }
});

export default Lifebuoy;
export { Lifebuoy };
