import { defineComponent, h } from 'vue';

const TextAlignCenterLarge = defineComponent({
  name: 'TextAlignCenterLarge',
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
          h('path', {"d":"M4 5L20 5"}),
          h('path', {"d":"M6 10L18 10"}),
          h('path', {"d":"M4 15L20 15"}),
          h('path', {"d":"M7 20L17 20"})
        ]
      );
  }
});

export default TextAlignCenterLarge;
export { TextAlignCenterLarge };
