import { defineComponent, h } from 'vue';

const MicrophoneOffBoxy = defineComponent({
  name: 'MicrophoneOffBoxy',
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
          h('path', {"d":"M8 22L16 22"}),
          h('path', {"d":"M12 22L12 18"}),
          h('path', {"d":"M21 2L3 19"}),
          h('path', {"d":"M5.84 16.316C6.918 17.355 8.383 18 10 18L14 18C17.313 18 20 15.313 20 12L20 11"}),
          h('path', {"d":"M4 11L4 12C4 12.383 4.039 12.758 4.109 13.121"}),
          h('path', {"d":"M15.301 2.492C14.949 2.188 14.5 2 14 2L10 2C8.895 2 8 2.895 8 4L8 9.391"}),
          h('path', {"d":"M8.762 13.559C9.102 13.832 9.527 14 10 14L14 14C15.105 14 16 13.105 16 12L16 6.723"})
        ]
      );
  }
});

export default MicrophoneOffBoxy;
export { MicrophoneOffBoxy };
