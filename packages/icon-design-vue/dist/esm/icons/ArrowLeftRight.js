import { defineComponent, h } from 'vue';

const ArrowLeftRight = defineComponent({
  name: 'ArrowLeftRight',
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
          h('path', {"d":"M20 8L4 8"}),
          h('path', {"d":"M7 11L4 8L7 5"}),
          h('path', {"d":"M17 14L20 17L17 20"}),
          h('path', {"d":"M4 17L20 17"})
        ]
      );
  }
});

export default ArrowLeftRight;
export { ArrowLeftRight };
