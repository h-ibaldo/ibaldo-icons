import { defineComponent, h } from 'vue';

const ChatStackDotsVertical = defineComponent({
  name: 'ChatStackDotsVertical',
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
          h('path', {"d":"M16 8.973C16 5.66 12.867 2.973 9 2.973C5.133 2.973 2 5.66 2 8.973C2 10.891 3.051 12.59 4.684 13.691C4.309 15.215 3.656 16.316 3 16.973C5.617 16.973 7.789 16.113 9.27 14.961C13.012 14.84 16 12.207 16 8.973Z"}),
          h('path', {"d":"M22 2L22 2"}),
          h('path', {"d":"M22 6L22 6"}),
          h('path', {"d":"M22 10L22 10"}),
          h('path', {"d":"M18 7.559C17.262 7.258 16.457 7.063 15.605 7"}),
          h('path', {"d":"M8.613 15.418C9.672 17.441 12 18.871 14.73 18.961C16.211 20.113 18.383 20.973 21 20.973C20.34 20.316 19.691 19.215 19.316 17.691C20.34 17 21.125 16.07 21.574 15"})
        ]
      );
  }
});

export default ChatStackDotsVertical;
export { ChatStackDotsVertical };
