import { defineComponent, h } from 'vue';

const ChatStackOffLayered = defineComponent({
  name: 'ChatStackOffLayered',
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
          h('path', {"d":"M2 2L20 21"}),
          h('path', {"d":"M16.676 17.488C17.473 16.949 18 16.039 18 15L18 9C18 7.344 16.656 6 15 6L5.789 6"}),
          h('path', {"d":"M2.086 8.313C2.035 8.535 2 8.762 2 9L2 22L7 18L11.262 18"}),
          h('path', {"d":"M18 14L19 14C20.656 14 22 12.656 22 11L22 5C22 3.344 20.656 2 19 2L8 2C6.344 2 5 3.344 5 5L5 5.168"})
        ]
      );
  }
});

export default ChatStackOffLayered;
export { ChatStackOffLayered };
