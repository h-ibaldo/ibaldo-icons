import { defineComponent, h } from 'vue';

const ChartLineUpAxisJagged = defineComponent({
  name: 'ChartLineUpAxisJagged',
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
          h('polyline', {"points":"2 2.000000000480213 2 22.000000000480213 22 22.000000000480213"}),
          h('polyline', {"points":"6 18.000000000480213 9 12.000000000480213 11 15.000000000480213 14 9.000000000480213 18 13.000000000480213 22 4.000000000480213"})
        ]
      );
  }
});

export default ChartLineUpAxisJagged;
export { ChartLineUpAxisJagged };
