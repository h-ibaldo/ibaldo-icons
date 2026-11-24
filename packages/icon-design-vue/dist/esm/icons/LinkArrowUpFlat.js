import { defineComponent, h } from 'vue';

const LinkArrowUpFlat = defineComponent({
  name: 'LinkArrowUpFlat',
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
          h('path', {"d":"M6.5 13C4.016 13 2 15.016 2 17.5C2 19.984 4.016 22 6.5 22L10.5 22C12.984 22 15 19.984 15 17.5C15 17.328 14.973 17.164 14.949 17"}),
          h('path', {"d":"M17.5 22C19.984 22 22 19.984 22 17.5C22 15.016 19.984 13 17.5 13L13.5 13C11.016 13 9 15.016 9 17.5C9 17.672 9.027 17.836 9.051 18"}),
          h('path', {"d":"M22 5L19 2L16 5"}),
          h('path', {"d":"M19 9L19 2"})
        ]
      );
  }
});

export default LinkArrowUpFlat;
export { LinkArrowUpFlat };
