import { defineComponent, h } from 'vue';

const WebcamSquare = defineComponent({
  name: 'WebcamSquare',
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
          h('path', {"d":"M7.5 9.5C7.5 7.016 9.516 5 12 5C14.484 5 16.5 7.016 16.5 9.5C16.5 11.984 14.484 14 12 14C9.516 14 7.5 11.984 7.5 9.5Z"}),
          h('path', {"d":"M10 9.5C10 8.395 10.895 7.5 12 7.5"}),
          h('path', {"d":"M10 17L10 22"}),
          h('path', {"d":"M14 17L14 22"}),
          h('path', {"d":"M19 22L5 22"}),
          h('path', {"d":"M8 2L16 2C18.211 2 20 3.789 20 6L20 13C20 15.211 18.211 17 16 17L8 17C5.789 17 4 15.211 4 13L4 6C4 3.789 5.789 2 8 2Z"})
        ]
      );
  }
});

export default WebcamSquare;
export { WebcamSquare };
