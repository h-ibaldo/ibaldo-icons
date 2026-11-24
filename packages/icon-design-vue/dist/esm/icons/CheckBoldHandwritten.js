import { defineComponent, h } from 'vue';

const CheckBoldHandwritten = defineComponent({
  name: 'CheckBoldHandwritten',
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
          h('polygon', {"points":"1.949462885140747 11.000000000480213 5.949462885140747 9.000000000480213 8.949462885140747 14.000000000480213 18.949462885140747 5.000000000480213 21.949462885140747 6.000000000480213 9.949460815629209 19.000000000480213 7.949462885140747 19.000000000480213 1.949462885140747 11.000000000480213"})
        ]
      );
  }
});

export default CheckBoldHandwritten;
export { CheckBoldHandwritten };
