import { defineComponent, h } from 'vue';

const CursorRippleSmall = defineComponent({
  name: 'CursorRippleSmall',
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
          h('path', {"d":"M22 19.527L17.262 14.793L20.559 13.691C21.332 13.434 21.363 12.352 20.605 12.051L8.133 7.063C7.461 6.793 6.793 7.461 7.063 8.133L12.051 20.605C12.355 21.363 13.438 21.332 13.691 20.559L14.793 17.262L19.527 22Z"}),
          h('path', {"d":"M10.977 4C10.066 2.793 8.629 2 7 2C4.238 2 2 4.238 2 7C2 8.633 2.793 10.063 4 10.977"})
        ]
      );
  }
});

export default CursorRippleSmall;
export { CursorRippleSmall };
