import { defineComponent, h } from 'vue';

const TextK = defineComponent({
  name: 'TextK',
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
          h('path', {"d":"M6 2.023L6 22"}),
          h('path', {"d":"M18 2.023L6 14"}),
          h('path', {"d":"M19 22L10 10"})
        ]
      );
  }
});

export default TextK;
export { TextK };
