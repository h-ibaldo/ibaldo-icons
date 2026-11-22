import { defineComponent, h } from 'vue';

const MapPinHouse = defineComponent({
  name: 'MapPinHouse',
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
          h('path', {"d":"M11.117 18.027L9 22L3.5 11.691C2.035 8.941 2.656 5.551 5 3.5C7.289 1.496 10.711 1.496 13 3.5C15.344 5.551 15.965 8.941 14.5 11.691"}),
          h('path', {"d":"M7 8C7 6.895 7.895 6 9 6C10.105 6 11 6.895 11 8C11 9.105 10.105 10 9 10C7.895 10 7 9.105 7 8Z"}),
          h('path', {"d":"M14 21L14 15.902L18 13L22 16L22 21Z"})
        ]
      );
  }
});

export default MapPinHouse;
export { MapPinHouse };
