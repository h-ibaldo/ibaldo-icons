import { defineComponent, h } from 'vue';

const MapPinPlusCorner = defineComponent({
  name: 'MapPinPlusCorner',
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
          h('path', {"d":"M7 8C7 6.895 7.895 6 9 6C10.105 6 11 6.895 11 8C11 9.105 10.105 10 9 10C7.895 10 7 9.105 7 8Z"}),
          h('path', {"d":"M9 22.004L3.5 11.691C2.035 8.945 2.656 5.551 5 3.504C7.289 1.5 10.711 1.5 13 3.504C15.344 5.551 15.965 8.945 14.5 11.691Z"}),
          h('path', {"d":"M18 15L18 21"}),
          h('path', {"d":"M21 18L15 18"})
        ]
      );
  }
});

export default MapPinPlusCorner;
export { MapPinPlusCorner };
