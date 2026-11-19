import { defineComponent, h } from 'vue';

const ChevronDoubleLeft = defineComponent({
  name: 'ChevronDoubleLeft',
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
          h('path', {"d":"M13 20L5 12L13 4"}),
          h('path', {"d":"M19 20L11 12L19 4"})
        ]
      );
  }
});

export default ChevronDoubleLeft;
export { ChevronDoubleLeft };
