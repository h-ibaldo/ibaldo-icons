import { defineComponent, h } from 'vue';

const Eraser = defineComponent({
  name: 'Eraser',
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
          h('path', {"d":"M15 3L3 15L9 21L21 9Z"}),
          h('path', {"d":"M7 11L13 17"}),
          h('path', {"d":"M3 21L20 21"})
        ]
      );
  }
});

export default Eraser;
export { Eraser };
