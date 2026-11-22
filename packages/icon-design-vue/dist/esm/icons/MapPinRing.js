import { defineComponent, h } from 'vue';

const MapPinRing = defineComponent({
  name: 'MapPinRing',
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
          h('path', {"d":"M12 22L6.5 11.691C5.035 8.941 5.656 5.551 8 3.5C10.289 1.496 13.711 1.496 16 3.5C18.344 5.551 18.965 8.941 17.5 11.691Z"}),
          h('path', {"d":"M9 8C9 6.344 10.344 5 12 5C13.656 5 15 6.344 15 8C15 9.656 13.656 11 12 11C10.344 11 9 9.656 9 8Z"})
        ]
      );
  }
});

export default MapPinRing;
export { MapPinRing };
