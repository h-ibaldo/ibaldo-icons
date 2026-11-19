import { defineComponent, h } from 'vue';

const ArrowDownCircleJoined = defineComponent({
  name: 'ArrowDownCircleJoined',
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
          h('path', {"d":"M15 11L12 14L9 11"}),
          h('path', {"d":"M7 3.348C3.746 5.234 1.648 8.891 2.051 13.004C2.5 17.633 6.238 21.426 10.859 21.938C16.895 22.605 22 17.898 22 12C22 8.008 19.66 4.563 16.277 2.961C14.293 2.02 12 3.484 12 5.68L12 14"})
        ]
      );
  }
});

export default ArrowDownCircleJoined;
export { ArrowDownCircleJoined };
