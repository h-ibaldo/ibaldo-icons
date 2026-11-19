import { defineComponent, h } from 'vue';

const ChatStackSettingsLayered = defineComponent({
  name: 'ChatStackSettingsLayered',
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
          h('path', {"d":"M18 9C18 7.344 16.656 6 15 6L5 6C3.344 6 2 7.344 2 9L2 22L7 18"}),
          h('path', {"d":"M5 6L5 5C5 3.344 6.344 2 8 2L19 2C20.656 2 22 3.344 22 5L22 11"}),
          h('path', {"d":"M18.52 13L13.324 13L10.727 17.5L13.324 22L18.52 22L21.117 17.5Z"}),
          h('path', {"d":"M16.922 17.5C16.922 16.945 16.477 16.5 15.922 16.5C15.371 16.5 14.922 16.945 14.922 17.5C14.922 18.055 15.371 18.5 15.922 18.5C16.477 18.5 16.922 18.055 16.922 17.5Z"})
        ]
      );
  }
});

export default ChatStackSettingsLayered;
export { ChatStackSettingsLayered };
