import { defineComponent, h } from 'vue';

const CheckSquareOpenJoined = defineComponent({
  name: 'CheckSquareOpenJoined',
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
          h('polyline', {"points":"19.949462885140747 6.000000000480213 11.949462885140747 14.000000000480213 8.949462885140747 11.000000000480213"}),
          h('path', {"d":"M14.949462885140747,5.000000000480213h-7c-1.656854249491516,0-3,1.343145750510303-3,3v8c0,1.656854249489697,1.343145750499389,3,3,3h8c1.656854249489697,0,3-1.343145750510303,3-3V7.000000000480213"})
        ]
      );
  }
});

export default CheckSquareOpenJoined;
export { CheckSquareOpenJoined };
