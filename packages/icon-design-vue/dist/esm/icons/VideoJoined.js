import { defineComponent, h } from 'vue';

const VideoJoined = defineComponent({
  name: 'VideoJoined',
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
          h('path', {"d":"M20.379 6.281L16 9.75L16 7C16 5.895 15.105 5 14 5L4 5C2.895 5 2 5.895 2 7L2 17C2 18.105 2.895 19 4 19L14 19C15.105 19 16 18.105 16 17L16 14.25L20.379 17.719C21.035 18.234 22 17.77 22 16.934L22 7.066C22 6.23 21.035 5.766 20.379 6.281Z"})
        ]
      );
  }
});

export default VideoJoined;
export { VideoJoined };
