import { defineComponent, h } from 'vue';

const ArrowLeftToDotCircle = defineComponent({
  name: 'ArrowLeftToDotCircle',
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
          h('path', {"d":"M13 15L10 12L13 9"}),
          h('path', {"d":"M17 12L10 12"}),
          h('path', {"d":"M4 14C5.105 14 6 13.105 6 12C6 10.895 5.105 10 4 10C2.895 10 2 10.895 2 12C2 13.105 2.895 14 4 14Z"}),
          h('path', {"d":"M4.016 18C5.836 20.426 8.73 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2C8.73 2 5.84 3.574 4.016 6"})
        ]
      );
  }
});

export default ArrowLeftToDotCircle;
export { ArrowLeftToDotCircle };
