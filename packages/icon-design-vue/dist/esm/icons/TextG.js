import { defineComponent, h } from 'vue';

const TextG = defineComponent({
  name: 'TextG',
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
          h('path', {"d":"M12 2C14.617 2 16.684 3.094 18.063 5"}),
          h('path', {"d":"M12 22C16.375 22 19 18.398 19 13L11.93 13"})
        ]
      );
  }
});

export default TextG;
export { TextG };
