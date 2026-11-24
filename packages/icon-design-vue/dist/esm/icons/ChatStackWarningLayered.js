import { defineComponent, h } from 'vue';

const ChatStackWarningLayered = defineComponent({
  name: 'ChatStackWarningLayered',
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
          h('path', {"d":"M5 6L5 5C5 3.344 6.344 2 8 2L19 2C20.656 2 22 3.344 22 5L22 13"}),
          h('path', {"d":"M13.77 12.004L9.902 18.699C9.059 20.168 10.117 22 11.809 22L19.191 22C20.883 22 21.941 20.168 21.098 18.699L17.234 12.004C16.461 10.668 14.539 10.668 13.77 12.004Z"}),
          h('path', {"d":"M15.5 16L15.5 15"}),
          h('path', {"d":"M15.5 19L15.5 19"}),
          h('path', {"d":"M17.816 8C17.402 6.84 16.305 6 15 6L5 6C3.344 6 2 7.344 2 9L2 22L6 19"})
        ]
      );
  }
});

export default ChatStackWarningLayered;
export { ChatStackWarningLayered };
