import { defineComponent, h } from 'vue';

const MicrophonePlayCircleBare = defineComponent({
  name: 'MicrophonePlayCircleBare',
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
          h('path', {"d":"M9 19L9 22"}),
          h('path', {"d":"M16 12.5L16 15.5L18.5 14Z"}),
          h('path', {"d":"M22 14C22 11.238 19.762 9 17 9C14.238 9 12 11.238 12 14C12 16.762 14.238 19 17 19C19.762 19 22 16.762 22 14Z"}),
          h('path', {"d":"M13 7L13 6C13 3.789 11.211 2 9 2C6.789 2 5 3.789 5 6L5 11C5 13.211 6.789 15 9 15"}),
          h('path', {"d":"M2 15C3.383 17.387 5.949 19 8.906 19C9.277 19 9.645 18.977 10 18.926"})
        ]
      );
  }
});

export default MicrophonePlayCircleBare;
export { MicrophonePlayCircleBare };
