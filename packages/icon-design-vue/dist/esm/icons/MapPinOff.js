import { defineComponent, h } from 'vue';

const MapPinOff = defineComponent({
  name: 'MapPinOff',
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
          h('path', {"d":"M3 3L21 21"}),
          h('path', {"d":"M10.586 6.586C10.949 6.223 11.449 6 12 6C13.105 6 14 6.895 14 8C14 8.551 13.777 9.051 13.414 9.414"}),
          h('path', {"d":"M7.738 3.738C7.824 3.656 7.91 3.578 8 3.5C10.289 1.496 13.711 1.496 16 3.5C18.344 5.551 18.965 8.941 17.5 11.691L16.871 12.871M15.477 15.477L12 22L6.5 11.691C5.566 9.934 5.48 7.918 6.152 6.152"})
        ]
      );
  }
});

export default MapPinOff;
export { MapPinOff };
