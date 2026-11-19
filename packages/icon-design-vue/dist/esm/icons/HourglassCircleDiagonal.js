import { defineComponent, h } from 'vue';

const HourglassCircleDiagonal = defineComponent({
  name: 'HourglassCircleDiagonal',
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
          h('path', {"d":"M12 12L14.414 14.414C14.789 14.789 15 15.297 15 15.828L15 17L9 17L9 15.828C9 15.297 9.211 14.789 9.586 14.414L10 14"}),
          h('path', {"d":"M12 12L9.586 9.586C9.211 9.211 9 8.703 9 8.172L9 7L15 7L15 8.172C15 8.703 14.789 9.211 14.414 9.586L14 10"}),
          h('path', {"d":"M22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12Z"})
        ]
      );
  }
});

export default HourglassCircleDiagonal;
export { HourglassCircleDiagonal };
