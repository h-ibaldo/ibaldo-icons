import { defineComponent, h } from 'vue';

const PlayCircle = defineComponent({
  name: 'PlayCircle',
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
          h('path', {"d":"M12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2Z"}),
          h('path', {"d":"M9 15.195L9 8.805C9 8.02 9.863 7.539 10.531 7.957L15.645 11.152C16.27 11.543 16.27 12.457 15.645 12.848L10.531 16.043C9.863 16.461 9 15.98 9 15.195Z"})
        ]
      );
  }
});

export default PlayCircle;
export { PlayCircle };
