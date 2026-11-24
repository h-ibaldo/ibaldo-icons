import { defineComponent, h } from 'vue';

const TextC = defineComponent({
  name: 'TextC',
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
          h('path', {"d":"M12 2C7 2 4 6 4 12C4 18 7 22 12 22"}),
          h('path', {"d":"M17.199 20C15.875 21.281 14.117 22 12 22"}),
          h('path', {"d":"M12 2C14.617 2 16.684 3.094 18.063 5"})
        ]
      );
  }
});

export default TextC;
export { TextC };
