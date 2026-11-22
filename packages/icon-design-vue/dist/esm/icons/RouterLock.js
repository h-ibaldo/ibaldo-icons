import { defineComponent, h } from 'vue';

const RouterLock = defineComponent({
  name: 'RouterLock',
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
          h('path', {"d":"M2 16L22 16L22 22L2 22Z"}),
          h('path', {"d":"M19 19L18 19"}),
          h('path', {"d":"M15 19L14 19"}),
          h('path', {"d":"M11 19L10 19"}),
          h('path', {"d":"M3 6L12 16L14.301 13.445"}),
          h('path', {"d":"M19.746 7.395L21 6"}),
          h('path', {"d":"M17 6L11 6L11 11L17 11Z"}),
          h('path', {"d":"M14 2C12.676 2 11.602 3.074 11.602 4.398L11.602 6L16.398 6L16.398 4.398C16.398 3.074 15.324 2 14 2Z"})
        ]
      );
  }
});

export default RouterLock;
export { RouterLock };
