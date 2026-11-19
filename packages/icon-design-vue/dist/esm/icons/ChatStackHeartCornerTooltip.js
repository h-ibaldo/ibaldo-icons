import { defineComponent, h } from 'vue';

const ChatStackHeartCornerTooltip = defineComponent({
  name: 'ChatStackHeartCornerTooltip',
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
          h('path', {"d":"M22 14L22 5C22 3.344 20.656 2 19 2L16 2"}),
          h('path', {"d":"M6.297 9.574L2.68 5.953C1.773 5.047 1.773 3.582 2.68 2.68L2.68 2.676C3.457 1.898 4.684 1.777 5.598 2.387L7 3.324L8.402 2.387C9.32 1.777 10.539 1.898 11.32 2.676L11.32 2.68C12.227 3.582 12.227 5.047 11.32 5.953L7.703 9.574C7.316 9.961 6.688 9.961 6.297 9.574Z"}),
          h('path', {"d":"M2 11L2 15C2 16.656 3.344 18 5 18L7 18L10 22L13 18L15 18C16.656 18 18 16.656 18 15L18 9C18 7.695 17.16 6.598 16 6.184"})
        ]
      );
  }
});

export default ChatStackHeartCornerTooltip;
export { ChatStackHeartCornerTooltip };
