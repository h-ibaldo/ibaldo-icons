import { defineComponent, h } from 'vue';

const ClipboardWarning = defineComponent({
  name: 'ClipboardWarning',
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
          h('path', {"d":"M5 22C3.895 22 3 21.105 3 20L3 6C3 4.895 3.895 4 5 4L8 4"}),
          h('path', {"d":"M16 4L19 4C20.105 4 21 4.895 21 6L21 10"}),
          h('path', {"d":"M14.883 7L9.117 7C8.5 7 8 6.5 8 5.883L8 3.117C8 2.5 8.5 2 9.117 2L14.883 2C15.5 2 16 2.5 16 3.117L16 5.883C16 6.5 15.5 7 14.883 7Z"}),
          h('path', {"d":"M15 15L15 16"}),
          h('path', {"d":"M15 19L15 19"}),
          h('path', {"d":"M10.445 22L19.555 22C21.09 22 22.051 20.34 21.289 19.008L17.133 11.734C16.191 10.082 13.809 10.082 12.867 11.734L8.711 19.008C7.949 20.34 8.91 22 10.445 22Z"})
        ]
      );
  }
});

export default ClipboardWarning;
export { ClipboardWarning };
