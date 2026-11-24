import { defineComponent, h } from 'vue';

const ChatStackSettingsSlant = defineComponent({
  name: 'ChatStackSettingsSlant',
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
          h('path', {"d":"M22 14L22 5C22 3.344 20.656 2 19 2L15 2"}),
          h('path', {"d":"M10.098 2L4.902 2L2.305 6.5L4.902 11L10.098 11L12.695 6.5Z"}),
          h('path', {"d":"M8.5 6.5C8.5 5.945 8.055 5.5 7.5 5.5C6.945 5.5 6.5 5.945 6.5 6.5C6.5 7.055 6.945 7.5 7.5 7.5C8.055 7.5 8.5 7.055 8.5 6.5Z"}),
          h('path', {"d":"M2 13L2 15C2 16.656 3.344 18 5 18L7 18L7 22L13 18L15 18C16.656 18 18 16.656 18 15L18 9C18 8.117 17.609 7.332 17 6.785"})
        ]
      );
  }
});

export default ChatStackSettingsSlant;
export { ChatStackSettingsSlant };
