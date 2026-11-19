import { defineComponent, h } from 'vue';

const CursorRippleDoubleUpRightSharp = defineComponent({
  name: 'CursorRippleDoubleUpRightSharp',
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
          h('path', {"d":"M2 14.375L13 11L9.625 22L7.738 19.09L4.828 22L2 19.172L4.91 16.262Z"}),
          h('path', {"d":"M15 15.578C16.766 14.805 18 13.051 18 11C18 8.238 15.762 6 13 6C10.949 6 9.195 7.234 8.422 9"}),
          h('path', {"d":"M14 19.941C18.5 19.445 22 15.633 22 11C22 6.031 17.973 2 13 2C8.367 2 4.559 5.5 4.059 10"})
        ]
      );
  }
});

export default CursorRippleDoubleUpRightSharp;
export { CursorRippleDoubleUpRightSharp };
