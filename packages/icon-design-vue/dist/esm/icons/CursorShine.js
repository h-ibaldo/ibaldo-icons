import { defineComponent, h } from 'vue';

const CursorShine = defineComponent({
  name: 'CursorShine',
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
          h('path', {"d":"M21.07 13.203L10.219 9.59C9.832 9.457 9.457 9.832 9.59 10.223L13.203 21.066C13.332 21.457 13.848 21.531 14.086 21.199L15.871 18.699L19.172 22L22 19.172L18.699 15.871L21.203 14.086C21.535 13.848 21.457 13.332 21.07 13.203Z"}),
          h('path', {"d":"M11 2L11 4"}),
          h('path', {"d":"M2 11L4 11"}),
          h('path', {"d":"M4.637 4.637L6.051 6.051"}),
          h('path', {"d":"M4.637 17.363L6.051 15.949"}),
          h('path', {"d":"M15.949 6.051L17.363 4.637"})
        ]
      );
  }
});

export default CursorShine;
export { CursorShine };
