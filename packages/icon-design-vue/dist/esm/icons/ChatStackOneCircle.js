import { defineComponent, h } from 'vue';

const ChatStackOneCircle = defineComponent({
  name: 'ChatStackOneCircle',
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
          h('path', {"d":"M13 7.5C13 10.535 10.539 13 7.5 13C4.461 13 2 10.535 2 7.5C2 4.465 4.461 2 7.5 2C10.539 2 13 4.465 13 7.5Z"}),
          h('path', {"d":"M8 9L8 6L7 6"}),
          h('path', {"d":"M8.961 16C10.129 17.723 12.258 18.906 14.73 18.988C16.211 20.141 18.383 21 21 21C20.344 20.344 19.691 19.242 19.316 17.719C20.949 16.617 22 14.914 22 13C22 9.98 19.391 7.488 16 7.07"})
        ]
      );
  }
});

export default ChatStackOneCircle;
export { ChatStackOneCircle };
