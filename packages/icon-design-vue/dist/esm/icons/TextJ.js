import { defineComponent, h } from 'vue';

const TextJ = defineComponent({
  name: 'TextJ',
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
          h('path', {"d":"M18 2.023L18 16C18 19.313 15.313 22 12 22C8.688 22 6 19.313 6 16L6 15"})
        ]
      );
  }
});

export default TextJ;
export { TextJ };
