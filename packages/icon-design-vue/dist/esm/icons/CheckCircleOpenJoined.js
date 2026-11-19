import { defineComponent, h } from 'vue';

const CheckCircleOpenJoined = defineComponent({
  name: 'CheckCircleOpenJoined',
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
          h('polyline', {"points":"8.949462885140747 11.000000000480213 11.949462885140747 14.000000000480213 18.514404291390747 7.435058594230213"}),
          h('path', {"d":"M18.514404291390747,7.435058594230213c-1.445373535161707-2.074645996090112-3.844787597661707-3.43505859375-6.56494140625-3.43505859375-4.41827392578125,0-8,3.58172607421875-8,8,0,4.418273925777612,3.58172607421875,8,8,8,4.418273925779431,0,8-3.581726074222388,8-8"})
        ]
      );
  }
});

export default CheckCircleOpenJoined;
export { CheckCircleOpenJoined };
