import { defineComponent, h } from 'vue';

const MicrophoneOff = defineComponent({
  name: 'MicrophoneOff',
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
          h('path', {"d":"M12 18L12 22"}),
          h('path', {"d":"M16 22L8 22"}),
          h('path', {"d":"M5.773 15C7.234 16.828 9.477 18 12 18C14.523 18 16.766 16.828 18.227 15"}),
          h('path', {"d":"M3 17L21 3"}),
          h('path', {"d":"M8.855 12.445C9.586 13.383 10.715 14 12 14C14.211 14 16 12.211 16 10L16 6.887"}),
          h('path', {"d":"M14.863 3.215C14.137 2.469 13.125 2 12 2C9.793 2 8 3.789 8 6L8 8.555"})
        ]
      );
  }
});

export default MicrophoneOff;
export { MicrophoneOff };
