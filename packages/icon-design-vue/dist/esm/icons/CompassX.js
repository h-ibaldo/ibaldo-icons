import { defineComponent, h } from 'vue';

const CompassX = defineComponent({
  name: 'CompassX',
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
          h('path', {"d":"M16 8L10 10L8 16L14 14Z"}),
          h('path', {"d":"M6 2L2 6"}),
          h('path', {"d":"M2 2L6 6"}),
          h('path', {"d":"M2.211 10C2.078 10.645 2 11.313 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2C11.313 2 10.648 2.078 10 2.211"})
        ]
      );
  }
});

export default CompassX;
export { CompassX };
