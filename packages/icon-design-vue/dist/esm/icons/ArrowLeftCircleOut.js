import { defineComponent, h } from 'vue';

const ArrowLeftCircleOut = defineComponent({
  name: 'ArrowLeftCircleOut',
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
          h('path', {"d":"M6 9L3 12L6 15"}),
          h('path', {"d":"M15 12L3 12"}),
          h('path', {"d":"M3.02 18C4.844 20.426 7.73 22 11 22C16.523 22 21 17.523 21 12C21 6.477 16.523 2 11 2C7.73 2 4.844 3.574 3.02 6"})
        ]
      );
  }
});

export default ArrowLeftCircleOut;
export { ArrowLeftCircleOut };
