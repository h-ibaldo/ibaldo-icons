import { defineComponent, h } from 'vue';

const WebcamOffSquare = defineComponent({
  name: 'WebcamOffSquare',
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
          h('path', {"d":"M4.352 4.352C4.98 2.965 6.379 2 8 2L16 2C18.211 2 20 3.789 20 6L20 13C20 14.898 18.676 16.492 16.898 16.898ZM12 17L8 17C5.789 17 4 15.211 4 13L4 9"}),
          h('path', {"d":"M2 2L22 22"}),
          h('path', {"d":"M10 9.5C10 8.395 10.895 7.5 12 7.5"}),
          h('path', {"d":"M10 17L10 22"}),
          h('path', {"d":"M14 19L14 22"}),
          h('path', {"d":"M17 22L7 22"}),
          h('path', {"d":"M7.824 7.824C8.488 6.168 10.105 5 12 5C14.484 5 16.5 7.016 16.5 9.5C16.5 11.391 15.332 13.012 13.676 13.676Z"})
        ]
      );
  }
});

export default WebcamOffSquare;
export { WebcamOffSquare };
