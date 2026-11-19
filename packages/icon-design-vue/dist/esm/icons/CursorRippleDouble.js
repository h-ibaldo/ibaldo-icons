import { defineComponent, h } from 'vue';

const CursorRippleDouble = defineComponent({
  name: 'CursorRippleDouble',
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
          h('path', {"d":"M21.016 13.223L10.859 10.238C10.48 10.125 10.125 10.48 10.238 10.859L13.223 21.016C13.344 21.414 13.867 21.504 14.113 21.164L15.871 18.699L19.172 22L22 19.172L18.699 15.871L21.164 14.113C21.504 13.871 21.414 13.344 21.016 13.223Z"}),
          h('path', {"d":"M12.805 7.152C12.082 6.441 11.094 6 10 6C7.789 6 6 7.793 6 10C6 11.094 6.441 12.082 7.152 12.805"}),
          h('path', {"d":"M17.574 7.438C16.504 4.277 13.52 2 10 2C5.582 2 2 5.582 2 10C2 13.52 4.277 16.504 7.438 17.574"})
        ]
      );
  }
});

export default CursorRippleDouble;
export { CursorRippleDouble };
