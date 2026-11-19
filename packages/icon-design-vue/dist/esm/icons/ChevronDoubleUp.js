import { defineComponent, h } from 'vue';

const ChevronDoubleUp = defineComponent({
  name: 'ChevronDoubleUp',
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
          h('path', {"d":"M4 13L12 5L20 13"}),
          h('path', {"d":"M4 19L12 11L20 19"})
        ]
      );
  }
});

export default ChevronDoubleUp;
export { ChevronDoubleUp };
