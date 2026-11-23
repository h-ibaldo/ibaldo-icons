import { defineComponent, h } from 'vue';

const TextP = defineComponent({
  name: 'TextP',
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
          h('path', {"d":"M6 22L6 2L11.5 2C15.09 2 18 4.91 18 8.5C18 12.09 15.09 15 11.5 15L6 15"})
        ]
      );
  }
});

export default TextP;
export { TextP };
