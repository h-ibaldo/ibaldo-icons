import { defineComponent, h } from 'vue';

const Tv = defineComponent({
  name: 'Tv',
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
          h('path', {"d":"M2 5L22 5L22 17L2 17Z"}),
          h('path', {"d":"M17 19L19 17L21 20"}),
          h('path', {"d":"M7 19L5 17L3 20"})
        ]
      );
  }
});

export default Tv;
export { Tv };
