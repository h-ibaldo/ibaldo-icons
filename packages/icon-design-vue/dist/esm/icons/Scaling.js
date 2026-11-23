import { defineComponent, h } from 'vue';

const Scaling = defineComponent({
  name: 'Scaling',
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
          h('path', {"d":"M10.305 13.695L21.699 2.301"}),
          h('path', {"d":"M16 14L11 14C10.449 14 10 13.551 10 13L10 8"}),
          h('path', {"d":"M16 2L21 2C21.551 2 22 2.449 22 3L22 8"}),
          h('path', {"d":"M22 12L22 21C22 21.551 21.551 22 21 22L3 22C2.449 22 2 21.551 2 21L2 3C2 2.449 2.449 2 3 2L12 2"})
        ]
      );
  }
});

export default Scaling;
export { Scaling };
