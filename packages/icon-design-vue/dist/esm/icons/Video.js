import { defineComponent, h } from 'vue';

const Video = defineComponent({
  name: 'Video',
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
          h('path', {"d":"M14 18L4 18C2.895 18 2 17.105 2 16L2 9C2 7.895 2.895 7 4 7L14 7C15.105 7 16 7.895 16 9L16 16C16 17.105 15.105 18 14 18Z"}),
          h('path', {"d":"M16 11L20.445 8.035C21.109 7.594 22 8.07 22 8.867L22 16.133C22 16.93 21.109 17.406 20.445 16.965L16 14"})
        ]
      );
  }
});

export default Video;
export { Video };
