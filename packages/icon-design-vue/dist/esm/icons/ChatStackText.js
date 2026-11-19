import { defineComponent, h } from 'vue';

const ChatStackText = defineComponent({
  name: 'ChatStackText',
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
          h('path', {"d":"M8.613 15.418C9.672 17.441 12 18.871 14.73 18.961C16.211 20.113 18.383 20.973 21 20.973C20.34 20.316 19.691 19.215 19.316 17.691C20.949 16.594 22 14.891 22 12.973C22 9.836 19.188 7.262 15.605 7"}),
          h('path', {"d":"M11 8L7 8"}),
          h('path', {"d":"M9 11L7 11"})
        ]
      );
  }
});

export default ChatStackText;
export { ChatStackText };
