import { defineComponent, h } from 'vue';

const ArrowUturnLeft = defineComponent({
  name: 'ArrowUturnLeft',
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
          h('path', {"d":"M7 12L3 8L7 4"}),
          h('path', {"d":"M3 8L15 8C18.313 8 21 10.688 21 14C21 17.313 18.313 20 15 20L12 20"})
        ]
      );
  }
});

export default ArrowUturnLeft;
export { ArrowUturnLeft };
