import { defineComponent, h } from 'vue';

const LinkBrokenBurstCircle = defineComponent({
  name: 'LinkBrokenBurstCircle',
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
          h('path', {"d":"M22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12Z"}),
          h('path', {"d":"M15 12L16.5 10.5C17.328 9.672 17.328 8.328 16.5 7.5C15.672 6.672 14.328 6.672 13.5 7.5L12 9"}),
          h('path', {"d":"M9 12L7.5 13.5C6.672 14.328 6.672 15.672 7.5 16.5C8.328 17.328 9.672 17.328 10.5 16.5L12 15"}),
          h('path', {"d":"M10 6L10 7"}),
          h('path', {"d":"M6 10L7 10"}),
          h('path', {"d":"M7.172 7.172L7.879 7.879"}),
          h('path', {"d":"M14 18L14 17"}),
          h('path', {"d":"M18 14L17 14"}),
          h('path', {"d":"M16.828 16.828L16.121 16.121"})
        ]
      );
  }
});

export default LinkBrokenBurstCircle;
export { LinkBrokenBurstCircle };
