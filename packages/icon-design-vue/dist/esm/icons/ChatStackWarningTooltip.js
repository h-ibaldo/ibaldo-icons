import { defineComponent, h } from 'vue';

const ChatStackWarningTooltip = defineComponent({
  name: 'ChatStackWarningTooltip',
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
          h('path', {"d":"M22 14L22 5C22 3.344 20.656 2 19 2L14 2"}),
          h('path', {"d":"M6.309 3L2.27 9.996C1.5 11.332 2.465 12.996 4.004 12.996L12.078 12.996C13.617 12.996 14.578 11.332 13.809 9.996L9.773 3C9.004 1.664 7.078 1.664 6.309 3Z"}),
          h('path', {"d":"M8.039 6.996L8.039 5.996"}),
          h('path', {"d":"M8.039 9.996L8.039 9.996"}),
          h('path', {"d":"M2.184 16C2.598 17.16 3.695 18 5 18L7 18L10 22L13 18L15 18C16.656 18 18 16.656 18 15L18 9C18 7.695 17.164 6.598 16 6.184"})
        ]
      );
  }
});

export default ChatStackWarningTooltip;
export { ChatStackWarningTooltip };
