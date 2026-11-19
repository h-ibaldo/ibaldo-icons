import { defineComponent, h } from 'vue';

const LinkBrokenSlim = defineComponent({
  name: 'LinkBrokenSlim',
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
          h('path', {"d":"M11.027 12.977L10.027 13.977C8.66 15.344 8.66 17.559 10.027 18.926L10.074 18.977C11.441 20.344 13.66 20.344 15.027 18.977L21 13C22.367 11.633 22.367 9.418 21 8.051L20.949 8C19.762 6.812 17.938 6.66 16.586 7.535"}),
          h('path', {"d":"M2 10L4 10"}),
          h('path', {"d":"M9 3L9 5"}),
          h('path', {"d":"M3.758 4.758L5.172 6.172"}),
          h('path', {"d":"M14 15.004C15.367 13.637 15.367 11.418 14 10.051L13.949 10.004C13.398 9.453 12.715 9.137 12 9.027"}),
          h('path', {"d":"M6 13L3.023 15.977C1.656 17.344 1.656 19.559 3.023 20.926L3.074 20.977C4.262 22.164 6.086 22.316 7.441 21.441"})
        ]
      );
  }
});

export default LinkBrokenSlim;
export { LinkBrokenSlim };
