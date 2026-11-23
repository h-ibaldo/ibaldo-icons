import { defineComponent, h } from 'vue';

const Slice = defineComponent({
  name: 'Slice',
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
          h('path', {"d":"M22 3L10 15L5 10L13 2"}),
          h('path', {"d":"M9.5 14.5L2 22L2 14L5.5 10.5"}),
          h('path', {"d":"M10 10L18 2"})
        ]
      );
  }
});

export default Slice;
export { Slice };
