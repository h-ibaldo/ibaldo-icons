import { defineComponent, h } from 'vue';

const GlobeGridCurvedTilted = defineComponent({
  name: 'GlobeGridCurvedTilted',
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
          h('path', {"d":"M2.522 15.162C5.176 13.845 7.668 12.09 9.879 9.879C12.09 7.668 13.845 5.176 15.162 2.522"}),
          h('path', {"d":"M21.478 8.838C18.824 10.155 16.332 11.91 14.121 14.121C11.91 16.332 10.155 18.824 8.838 21.478"}),
          h('path', {"d":"M9.172 14.828C12.065 17.722 15.741 19.17 19.071 19.071C19.17 15.741 17.722 12.065 14.828 9.172C11.935 6.278 8.259 4.83 4.929 4.929C4.83 8.259 6.278 11.935 9.172 14.828Z"})
        ]
      );
  }
});

export default GlobeGridCurvedTilted;
export { GlobeGridCurvedTilted };
