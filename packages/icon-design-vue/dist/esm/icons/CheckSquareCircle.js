import { defineComponent, h } from 'vue';

const CheckSquareCircle = defineComponent({
  name: 'CheckSquareCircle',
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
          h('circle', {"cx":"11.999999981180736","cy":"11.999996564258254","r":"10"}),
          h('rect', {"x":"6.999999981180736","y":"6.999996564258254","width":"10","height":"10"}),
          h('polyline', {"points":"9.999999981180736 11.999996564258254 10.999999981180736 13.499996564258254 13.999999981180736 10.999996564258254"})
        ]
      );
  }
});

export default CheckSquareCircle;
export { CheckSquareCircle };
