import { defineComponent, h } from 'vue';

const WebcamRingWide = defineComponent({
  name: 'WebcamRingWide',
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
          h('path', {"d":"M9.039 8.082C9.039 6.379 10.418 5 12.121 5C13.82 5 15.203 6.379 15.203 8.082C15.203 9.781 13.82 11.164 12.121 11.164C10.418 11.164 9.039 9.781 9.039 8.082Z"}),
          h('path', {"d":"M4 2L20 2C21.105 2 22 2.895 22 4L22 12C22 13.105 21.105 14 20 14L4 14C2.895 14 2 13.105 2 12L2 4C2 2.895 2.895 2 4 2Z"}),
          h('path', {"d":"M9 18L15 18C17.211 18 19 19.789 19 22L5 22C5 19.789 6.789 18 9 18Z"}),
          h('path', {"d":"M10 14L10 18"}),
          h('path', {"d":"M14 14L14 18"}),
          h('path', {"d":"M5.672 11C5.242 10.09 5 9.074 5 8C5 6.926 5.242 5.91 5.672 5"}),
          h('path', {"d":"M18.328 5C18.758 5.91 19 6.926 19 8C19 9.074 18.758 10.09 18.328 11"})
        ]
      );
  }
});

export default WebcamRingWide;
export { WebcamRingWide };
