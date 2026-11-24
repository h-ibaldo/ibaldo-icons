import { defineComponent, h } from 'vue';

const ChatStackSunLayered = defineComponent({
  name: 'ChatStackSunLayered',
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
          h('path', {"d":"M15.195 20C12.988 20 11.195 18.211 11.195 16C11.195 13.789 12.988 12 15.195 12C17.406 12 19.195 13.789 19.195 16C19.195 18.211 17.406 20 15.195 20Z"}),
          h('path', {"d":"M15.195 10L15.195 12"}),
          h('path', {"d":"M15.195 20L15.195 22"}),
          h('path', {"d":"M20.395 13L18.66 14"}),
          h('path', {"d":"M11.73 18L10 19"}),
          h('path', {"d":"M20.395 19L18.66 18"}),
          h('path', {"d":"M11.73 14L10 13"}),
          h('path', {"d":"M5 6L5 5C5 3.344 6.344 2 8 2L19 2C20.656 2 22 3.344 22 5L22 9"}),
          h('path', {"d":"M18 9C18 7.344 16.656 6 15 6L5 6C3.344 6 2 7.344 2 9L2 22L7 18"})
        ]
      );
  }
});

export default ChatStackSunLayered;
export { ChatStackSunLayered };
