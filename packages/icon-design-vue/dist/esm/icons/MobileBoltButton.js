import { defineComponent, h } from 'vue';

const MobileBoltButton = defineComponent({
  name: 'MobileBoltButton',
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
          h('path', {"d":"M8 2L16 2C17.105 2 18 2.895 18 4L18 20C18 21.105 17.105 22 16 22L8 22C6.895 22 6 21.105 6 20L6 4C6 2.895 6.895 2 8 2Z"}),
          h('path', {"d":"M13 19L11 19"}),
          h('path', {"d":"M13 7L10 11L14 11L11 15"})
        ]
      );
  }
});

export default MobileBoltButton;
export { MobileBoltButton };
