import { defineComponent, h } from 'vue';

const FlipVerticalDashed = defineComponent({
  name: 'FlipVerticalDashed',
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
          h('path', {"d":"M2 12L4 12"}),
          h('path', {"d":"M8 12L10 12"}),
          h('path', {"d":"M14 12L16 12"}),
          h('path', {"d":"M20 12L22 12"}),
          h('path', {"d":"M8 7L16 7L12 2Z"}),
          h('path', {"d":"M16 17L8 17L12 22Z"})
        ]
      );
  }
});

export default FlipVerticalDashed;
export { FlipVerticalDashed };
