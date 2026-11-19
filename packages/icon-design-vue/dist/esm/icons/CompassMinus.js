import { defineComponent, h } from 'vue';

const CompassMinus = defineComponent({
  name: 'CompassMinus',
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
          h('path', {"d":"M2 4L8 4"}),
          h('path', {"d":"M16 8L10 10L8 16L14 14Z"}),
          h('path', {"d":"M2.465 9C2.164 9.945 2 10.953 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2"})
        ]
      );
  }
});

export default CompassMinus;
export { CompassMinus };
