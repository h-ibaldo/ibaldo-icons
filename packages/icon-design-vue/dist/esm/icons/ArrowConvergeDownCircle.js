import { defineComponent, h } from 'vue';

const ArrowConvergeDownCircle = defineComponent({
  name: 'ArrowConvergeDownCircle',
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
          h('path', {"d":"M12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22Z"}),
          h('path', {"d":"M6 10L8 12L10 10"}),
          h('path', {"d":"M10 16L12 14L14 16"}),
          h('path', {"d":"M14 10L16 12L18 10"}),
          h('path', {"d":"M12 19L12 14"}),
          h('path', {"d":"M8 12L8 7"}),
          h('path', {"d":"M16 12L16 7"})
        ]
      );
  }
});

export default ArrowConvergeDownCircle;
export { ArrowConvergeDownCircle };
