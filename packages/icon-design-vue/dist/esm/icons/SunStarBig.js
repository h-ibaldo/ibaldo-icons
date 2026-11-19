import { defineComponent, h } from 'vue';

const SunStarBig = defineComponent({
  name: 'SunStarBig',
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
          h('polygon', {"points":"18.999999990796823 15.000000000456566 21.999999990796823 12.000000000456566 18.999999990796823 9.000000000456566 18.999999990796823 5.000000000456566 14.999999990796823 5.000000000456566 11.999999990796823 2.000000000456566 8.999999990796823 5.000000000456566 4.999999990796823 5.000000000456566 4.999999990796823 9.000000000456566 1.999999990796823 12.000000000456566 4.999999990796823 15.000000000456566 4.999999990796823 19.000000000456566 8.999999990796823 19.000000000456566 11.999999990796823 22.000000000456566 14.999999990796823 19.000000000456566 18.999999990796823 19.000000000456566 18.999999990796823 15.000000000456566"}),
          h('circle', {"cx":"11.999999990796823","cy":"12.000000000448381","r":"5"})
        ]
      );
  }
});

export default SunStarBig;
export { SunStarBig };
