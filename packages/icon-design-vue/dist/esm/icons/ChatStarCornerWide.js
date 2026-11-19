import { defineComponent, h } from 'vue';

const ChatStarCornerWide = defineComponent({
  name: 'ChatStarCornerWide',
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
          h('path', {"d":"M16.426 2.266L17.785 5.02L20.824 5.461C21.215 5.52 21.371 5.996 21.09 6.27L18.891 8.414L19.406 11.445C19.477 11.832 19.066 12.125 18.719 11.945L16 10.516L13.281 11.945C12.934 12.125 12.527 11.832 12.594 11.445L13.113 8.414L10.91 6.27C10.629 5.996 10.785 5.52 11.172 5.461L14.215 5.02L15.574 2.266C15.75 1.91 16.25 1.91 16.426 2.266Z"}),
          h('path', {"d":"M9 3.027C5.094 3.285 2 6.527 2 10.5C2 13.762 4.09 16.535 7 17.563L7 22L11.668 18L14.5 18C16.949 18 19.121 16.82 20.488 15"})
        ]
      );
  }
});

export default ChatStarCornerWide;
export { ChatStarCornerWide };
