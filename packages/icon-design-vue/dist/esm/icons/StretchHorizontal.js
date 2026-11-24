import { defineComponent, h } from 'vue';

const StretchHorizontal = defineComponent({
  name: 'StretchHorizontal',
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
          h('path', {"d":"M4 2L20 2C21.105 2 22 2.895 22 4L22 7C22 8.105 21.105 9 20 9L4 9C2.895 9 2 8.105 2 7L2 4C2 2.895 2.895 2 4 2Z"}),
          h('path', {"d":"M4 15L20 15C21.105 15 22 15.895 22 17L22 20C22 21.105 21.105 22 20 22L4 22C2.895 22 2 21.105 2 20L2 17C2 15.895 2.895 15 4 15Z"})
        ]
      );
  }
});

export default StretchHorizontal;
export { StretchHorizontal };
