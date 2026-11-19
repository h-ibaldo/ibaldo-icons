import { defineComponent, h } from 'vue';

const PointerSquare = defineComponent({
  name: 'PointerSquare',
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
          h('path', {"d":"M8.031 8.805L10.684 16.758C10.848 17.254 11.52 17.328 11.789 16.879L13.695 13.699L16.879 11.785C17.328 11.52 17.254 10.848 16.758 10.684L8.805 8.031C8.328 7.871 7.875 8.328 8.031 8.805Z"}),
          h('path', {"d":"M5 22L19 22C20.656 22 22 20.656 22 19L22 5C22 3.344 20.656 2 19 2L5 2C3.344 2 2 3.344 2 5L2 19C2 20.656 3.344 22 5 22Z"})
        ]
      );
  }
});

export default PointerSquare;
export { PointerSquare };
