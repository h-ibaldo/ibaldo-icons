import { defineComponent, h } from 'vue';

const GitPullRequestX = defineComponent({
  name: 'GitPullRequestX',
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
          h('path', {"d":"M18 15C19.656 15 21 16.344 21 18C21 19.656 19.656 21 18 21C16.344 21 15 19.656 15 18C15 16.344 16.344 15 18 15Z"}),
          h('path', {"d":"M18 15L18 8C18 6.895 17.105 6 16 6L10.938 6"}),
          h('path', {"d":"M6.063 21L6.063 11"}),
          h('path', {"d":"M3 3L9.098 9"}),
          h('path', {"d":"M3 9L9.098 3"})
        ]
      );
  }
});

export default GitPullRequestX;
export { GitPullRequestX };
