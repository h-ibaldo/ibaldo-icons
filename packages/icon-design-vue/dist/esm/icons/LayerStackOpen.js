import { defineComponent, h } from 'vue';

const LayerStackOpen = defineComponent({
  name: 'LayerStackOpen',
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
          h('polygon', {"points":"11.999999990796823 10.000000000448381 1.999999990796823 6.000000000448381 11.999999990796823 2.000000000448381 21.999999990796823 6.000000000448381 11.999999990796823 10.000000000448381"}),
          h('polyline', {"points":"5.749999990796823 10.500000000448381 1.999999990796823 12.000000000448381 11.999999990796823 16.000000000448381 21.999999990796823 12.000000000448381 18.249999990796823 10.500000000448381"}),
          h('polyline', {"points":"5.749999990796823 17.000000000448381 1.999999990796823 18.500000000448381 11.999999990796823 22.500000000448381 21.999999990796823 18.500000000448381 18.249999990796823 17.000000000448381"})
        ]
      );
  }
});

export default LayerStackOpen;
export { LayerStackOpen };
