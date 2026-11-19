import { defineComponent, h } from 'vue';

const ArrowUpRightCircleSegmented = defineComponent({
  name: 'ArrowUpRightCircleSegmented',
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
          h('path', {"d":"M15 14L15 9L10 9"}),
          h('path', {"d":"M9 15L15 9"}),
          h('path', {"d":"M2.004 12.094C2.004 12.063 2 12.031 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22C11.969 22 11.938 21.996 11.902 21.996"}),
          h('path', {"d":"M8.352 21.305C5.766 20.289 3.711 18.234 2.695 15.648"})
        ]
      );
  }
});

export default ArrowUpRightCircleSegmented;
export { ArrowUpRightCircleSegmented };
