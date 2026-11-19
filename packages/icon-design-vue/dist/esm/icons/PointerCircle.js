import { defineComponent, h } from 'vue';

const PointerCircle = defineComponent({
  name: 'PointerCircle',
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
          h('path', {"d":"M2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12Z"}),
          h('path', {"d":"M8.789 8.031L16.59 10.633C17.074 10.793 17.148 11.453 16.711 11.715L13.59 13.59L11.715 16.711C11.449 17.148 10.793 17.078 10.633 16.59L8.031 8.789C7.875 8.32 8.32 7.875 8.789 8.031Z"})
        ]
      );
  }
});

export default PointerCircle;
export { PointerCircle };
