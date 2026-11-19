import { defineComponent, h } from 'vue';

const MicrophonePlayCircleGrille = defineComponent({
  name: 'MicrophonePlayCircleGrille',
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
          h('path', {"d":"M7 18L7 21"}),
          h('path', {"d":"M5 8L2 8"}),
          h('path', {"d":"M5 12L2 12"}),
          h('path', {"d":"M12 8L9 8"}),
          h('path', {"d":"M9.5 12L9 12"}),
          h('path', {"d":"M2 22L12 22"}),
          h('path', {"d":"M16 13.5L16 16.5L18.5 15Z"}),
          h('path', {"d":"M22 15C22 12.238 19.762 10 17 10C14.238 10 12 12.238 12 15C12 17.762 14.238 20 17 20C19.762 20 22 17.762 22 15Z"}),
          h('path', {"d":"M12 8L12 6.781C12 4.141 9.859 2 7.219 2L6.781 2C4.141 2 2 4.141 2 6.781L2 13.219C2 15.859 4.141 18 6.781 18L7.219 18C7.852 18 8.449 17.871 9 17.648"})
        ]
      );
  }
});

export default MicrophonePlayCircleGrille;
export { MicrophonePlayCircleGrille };
