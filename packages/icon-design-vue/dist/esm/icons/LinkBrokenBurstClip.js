import { defineComponent, h } from 'vue';

const LinkBrokenBurstClip = defineComponent({
  name: 'LinkBrokenBurstClip',
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
          h('path', {"d":"M9 15L15 9"}),
          h('path', {"d":"M4 9L2 9"}),
          h('path', {"d":"M5.465 5.465L4.051 4.051"}),
          h('path', {"d":"M9 4L9 2"}),
          h('path', {"d":"M20 15L22 15"}),
          h('path', {"d":"M18.535 18.535L19.949 19.949"}),
          h('path', {"d":"M15 20L15 22"}),
          h('path', {"d":"M13 17L10.004 19.996C8.344 21.656 5.656 21.656 3.996 19.996C2.34 18.34 2.34 15.656 3.992 13.996L7 10.98"}),
          h('path', {"d":"M11 6.98L13.996 3.98C15.656 2.324 18.344 2.324 20.004 3.98L20.004 3.984C21.66 5.637 21.66 8.324 20.008 9.98L17 13"})
        ]
      );
  }
});

export default LinkBrokenBurstClip;
export { LinkBrokenBurstClip };
