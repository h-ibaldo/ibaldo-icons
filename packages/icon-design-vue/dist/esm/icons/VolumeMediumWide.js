import { defineComponent, h } from 'vue';

const VolumeMediumWide = defineComponent({
  name: 'VolumeMediumWide',
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
          h('path', {"d":"M17.457 16.914C19.262 16.012 20.5 14.152 20.5 12C20.5 9.848 19.262 7.988 17.457 7.086"}),
          h('path', {"d":"M16 13.707C16.594 13.359 17 12.734 17 12C17 11.266 16.594 10.641 16 10.293"}),
          h('path', {"d":"M4 10L4 14C4 14.555 4.445 15 5 15L7 15L11.293 19.293C11.922 19.922 13 19.477 13 18.586L13 5.414C13 4.523 11.922 4.078 11.293 4.707L7 9L5 9C4.445 9 4 9.445 4 10Z"})
        ]
      );
  }
});

export default VolumeMediumWide;
export { VolumeMediumWide };
