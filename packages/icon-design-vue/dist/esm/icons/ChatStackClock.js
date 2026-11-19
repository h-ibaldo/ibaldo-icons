import { defineComponent, h } from 'vue';

const ChatStackClock = defineComponent({
  name: 'ChatStackClock',
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
          h('path', {"d":"M21 6C21 8.762 18.762 11 16 11C13.238 11 11 8.762 11 6C11 3.238 13.238 1 16 1C18.762 1 21 3.238 21 6Z"}),
          h('path', {"d":"M18 6L16 6L16 4"}),
          h('path', {"d":"M11.723 3.445C10.887 3.141 9.965 2.973 9 2.973C5.133 2.973 2 5.66 2 8.973C2 10.891 3.051 12.59 4.684 13.691C4.309 15.215 3.66 16.316 3 16.973C5.617 16.973 7.789 16.113 9.27 14.961C12.203 14.867 14.668 13.223 15.598 10.961"}),
          h('path', {"d":"M8.613 15.418C9.672 17.441 12 18.871 14.73 18.961C16.211 20.113 18.383 20.973 21 20.973C20.34 20.316 19.691 19.215 19.316 17.691C20.949 16.594 22 14.891 22 12.973C22 11.383 21.273 9.938 20.09 8.863"})
        ]
      );
  }
});

export default ChatStackClock;
export { ChatStackClock };
