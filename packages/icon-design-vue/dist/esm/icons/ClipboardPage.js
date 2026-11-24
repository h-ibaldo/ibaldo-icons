import { defineComponent, h } from 'vue';

const ClipboardPage = defineComponent({
  name: 'ClipboardPage',
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
          h('path', {"d":"M6 20L5 20C3.895 20 3 19.105 3 18L3 6C3 4.895 3.895 4 5 4L7 4"}),
          h('path', {"d":"M15 4L17 4C18.105 4 19 4.895 19 6L19 7"}),
          h('path', {"d":"M13.883 6.117L8.117 6.117C7.5 6.117 7 5.617 7 5L7 3.117C7 2.5 7.5 2 8.117 2L13.883 2C14.5 2 15 2.5 15 3.117L15 5C15 5.617 14.5 6.117 13.883 6.117Z"}),
          h('path', {"d":"M20 22L10 22C9.449 22 9 21.551 9 21L9 11C9 10.449 9.449 10 10 10L20 10C20.551 10 21 10.449 21 11L21 21C21 21.551 20.551 22 20 22Z"})
        ]
      );
  }
});

export default ClipboardPage;
export { ClipboardPage };
