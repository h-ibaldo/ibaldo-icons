import { defineComponent, h } from 'vue';

const GaugeFlatCircle = defineComponent({
  name: 'GaugeFlatCircle',
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
          h('path', {"d":"M22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12Z"}),
          h('path', {"d":"M13 12C13 11.445 12.551 11 12 11C11.449 11 11 11.445 11 12C11 12.555 11.449 13 12 13C12.551 13 13 12.555 13 12Z"}),
          h('path', {"d":"M16.5 7.5L12 12"}),
          h('path', {"d":"M13 6.09C12.676 6.035 12.34 6 12 6C8.688 6 6 8.688 6 12C6 14.086 7.066 15.926 8.688 17L15.313 17C16.934 15.926 18 14.086 18 12C18 11.656 17.965 11.324 17.91 11"})
        ]
      );
  }
});

export default GaugeFlatCircle;
export { GaugeFlatCircle };
