import { defineComponent, h } from 'vue';

const Ethernet = defineComponent({
  name: 'Ethernet',
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
          h('polyline', {"points":"5.000000000029104 7.999999999979991 2.000000000029104 11.999999999979991 5.000000000029104 15.999999999979991"}),
          h('polyline', {"points":"19.000000000029104 15.999999999979991 22.000000000029104 11.999999999979991 19.000000000029104 7.999999999979991"}),
          h('line', {"x1":"12.000000000029104","y1":"12.009999999980209","x2":"12.000000000029104","y2":"11.999999999979991"}),
          h('line', {"x1":"16.000000000029104","y1":"12.009999999980209","x2":"16.000000000029104","y2":"11.999999999979991"}),
          h('line', {"x1":"8.000000000029104","y1":"12.009999999980209","x2":"8.000000000029104","y2":"11.999999999979991"})
        ]
      );
  }
});

export default Ethernet;
export { Ethernet };
