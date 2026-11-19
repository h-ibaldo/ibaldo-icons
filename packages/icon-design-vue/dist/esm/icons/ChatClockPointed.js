import { defineComponent, h } from 'vue';

const ChatClockPointed = defineComponent({
  name: 'ChatClockPointed',
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
          h('path', {"d":"M22 7C22 9.762 19.762 12 17 12C14.238 12 12 9.762 12 7C12 4.238 14.238 2 17 2C19.762 2 22 4.238 22 7Z"}),
          h('path', {"d":"M19 7L17 7L17 5"}),
          h('path', {"d":"M9 3C5.133 3 2 6.133 2 10C2 13.867 5.133 17 9 17L10 17L10 22L17.68 17.52C18.781 16.879 19.695 16.012 20.402 15"})
        ]
      );
  }
});

export default ChatClockPointed;
export { ChatClockPointed };
