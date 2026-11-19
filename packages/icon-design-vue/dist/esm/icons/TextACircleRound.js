import { defineComponent, h } from 'vue';

const TextACircleRound = defineComponent({
  name: 'TextACircleRound',
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
          h('path', {"d":"M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22Z"}),
          h('path', {"d":"M8 16L10.773 7.684C10.906 7.273 11.289 7 11.723 7L12.277 7C12.711 7 13.094 7.273 13.227 7.684L16 16"}),
          h('path', {"d":"M9 14L15 14"})
        ]
      );
  }
});

export default TextACircleRound;
export { TextACircleRound };
