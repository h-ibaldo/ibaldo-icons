import { defineComponent, h } from 'vue';

const ArrowUpCircleJoined = defineComponent({
  name: 'ArrowUpCircleJoined',
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
          h('path', {"d":"M9 13L12 10L15 13"}),
          h('path', {"d":"M17 20.652C20.254 18.766 22.352 15.109 21.949 10.996C21.5 6.367 17.762 2.574 13.141 2.063C7.105 1.395 2 6.102 2 12C2 15.992 4.34 19.438 7.723 21.039C9.707 21.98 12 20.516 12 18.32L12 10"})
        ]
      );
  }
});

export default ArrowUpCircleJoined;
export { ArrowUpCircleJoined };
