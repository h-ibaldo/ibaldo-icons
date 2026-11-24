import { defineComponent, h } from 'vue';

const LinkDotsFlat = defineComponent({
  name: 'LinkDotsFlat',
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
          h('path', {"d":"M6.5 10C4.016 10 2 12.016 2 14.5C2 16.984 4.016 19 6.5 19L10.5 19C12.984 19 15 16.984 15 14.5C15 14.328 14.973 14.164 14.949 14"}),
          h('path', {"d":"M17.5 19C19.984 19 22 16.984 22 14.5C22 12.016 19.984 10 17.5 10L13.5 10C11.016 10 9 12.016 9 14.5C9 14.672 9.027 14.836 9.051 15"}),
          h('path', {"d":"M3 5L3 5"}),
          h('path', {"d":"M7 5L7 5"})
        ]
      );
  }
});

export default LinkDotsFlat;
export { LinkDotsFlat };
