import { defineComponent, h } from 'vue';

const TextR = defineComponent({
  name: 'TextR',
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
          h('path', {"d":"M6 22L6 2L13 2C15.762 2 18 4.238 18 7C18 9.762 15.762 12 13 12L6 12"}),
          h('path', {"d":"M12 12L19 22"})
        ]
      );
  }
});

export default TextR;
export { TextR };
