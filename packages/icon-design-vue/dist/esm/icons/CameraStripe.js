import { defineComponent, h } from 'vue';

const CameraStripe = defineComponent({
  name: 'CameraStripe',
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
          h('path', {"d":"M4 7L7 7L9 3L15 3L17 7L20 7C21.105 7 22 7.895 22 9L22 19C22 20.105 21.105 21 20 21L4 21C2.895 21 2 20.105 2 19L2 9C2 7.895 2.895 7 4 7Z"}),
          h('path', {"d":"M7.5 13.5C7.5 11.016 9.516 9 12 9C14.484 9 16.5 11.016 16.5 13.5C16.5 15.984 14.484 18 12 18C9.516 18 7.5 15.984 7.5 13.5Z"}),
          h('path', {"d":"M22 11L16 11"}),
          h('path', {"d":"M8 11L2 11"})
        ]
      );
  }
});

export default CameraStripe;
export { CameraStripe };
