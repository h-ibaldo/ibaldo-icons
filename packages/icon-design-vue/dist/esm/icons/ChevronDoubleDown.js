import { defineComponent, h } from 'vue';

const ChevronDoubleDown = defineComponent({
  name: 'ChevronDoubleDown',
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
          h('path', {"d":"M20 11L12 19L4 11"}),
          h('path', {"d":"M20 5L12 13L4 5"})
        ]
      );
  }
});

export default ChevronDoubleDown;
export { ChevronDoubleDown };
