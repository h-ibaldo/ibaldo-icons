import { defineComponent, h } from 'vue';

const VideoSquare = defineComponent({
  name: 'VideoSquare',
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
          h('path', {"d":"M17 22L7 22C4.238 22 2 19.762 2 17L2 7C2 4.238 4.238 2 7 2L17 2C19.762 2 22 4.238 22 7L22 17C22 19.762 19.762 22 17 22Z"}),
          h('path', {"d":"M12.844 15L7.156 15C6.516 15 6 14.484 6 13.844L6 10.156C6 9.516 6.516 9 7.156 9L12.844 9C13.484 9 14 9.516 14 10.156L14 13.844C14 14.484 13.484 15 12.844 15Z"}),
          h('path', {"d":"M14 11L18 9L18 15L14 13"})
        ]
      );
  }
});

export default VideoSquare;
export { VideoSquare };
