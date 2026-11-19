import { defineComponent, h } from 'vue';

const ChevronDoubleRight = defineComponent({
  name: 'ChevronDoubleRight',
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
          h('path', {"d":"M11 4L19 12L11 20"}),
          h('path', {"d":"M5 4L13 12L5 20"})
        ]
      );
  }
});

export default ChevronDoubleRight;
export { ChevronDoubleRight };
