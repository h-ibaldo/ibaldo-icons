import { defineComponent, h } from 'vue';

const SunMixedHuge = defineComponent({
  name: 'SunMixedHuge',
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
          h('circle', {"cx":"12","cy":"12.000000011850716","r":"7.000000000000001"}),
          h('line', {"x1":"7.050252531362275","y1":"16.949747479824509","x2":"4.928932187658575","y2":"19.07106782324081"}),
          h('line', {"x1":"16.949747468639544","y1":"7.050252543878742","x2":"19.071067812341425","y2":"4.928932200462441"}),
          h('line', {"x1":"7.050252532028026","y1":"7.050252543212991","x2":"4.928932188611725","y2":"4.92893219951111"}),
          h('line', {"x1":"16.949747467971974","y1":"16.949747480490259","x2":"19.071067811388275","y2":"19.07106782419396"}),
          h('line', {"x1":"2.010000000000218","y1":"12.000000011401426","x2":"2","y2":"12.000000011401426"}),
          h('line', {"x1":"21.989999999999782","y1":"12.000000012300006","x2":"22","y2":"12.000000012300006"}),
          h('line', {"x1":"12.00000000044929","y1":"2.010000011850934","x2":"12.00000000044929","y2":"2.000000011850716"}),
          h('line', {"x1":"11.99999999955071","y1":"21.990000011850498","x2":"11.99999999955071","y2":"22.000000011850716"})
        ]
      );
  }
});

export default SunMixedHuge;
export { SunMixedHuge };
