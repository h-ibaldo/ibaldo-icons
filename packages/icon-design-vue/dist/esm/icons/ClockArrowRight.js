import { defineComponent, h } from 'vue';

const ClockArrowRight = defineComponent({
  name: 'ClockArrowRight',
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
          h('line', {"x1":"2","y1":"18.999999999887223","x2":"10","y2":"18.999999999887223"}),
          h('polyline', {"points":"7 15.999999999887223 10 18.999999999887223 7 21.999999999887223"}),
          h('path', {"d":"M13,21.949523925668473c5.05322265625-.501892089840112,9-4.764282226560681,9-9.94952392578125,0-5.522827148439319-4.477172851560681-10-10-10S2,6.477172851447904,2,11.999999999887223c0,.685974121090112.076232910159888,1.353149414060681.208312988279431,2"}),
          h('polyline', {"points":"12 6.999999999887223 12 11.999999999887223 17 11.999999999887223"})
        ]
      );
  }
});

export default ClockArrowRight;
export { ClockArrowRight };
