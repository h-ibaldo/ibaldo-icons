import { defineComponent, h } from 'vue';

const GitCommitHorizontal = defineComponent({
  name: 'GitCommitHorizontal',
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
          h('path', {"d":"M12 9C13.656 9 15 10.344 15 12C15 13.656 13.656 15 12 15C10.344 15 9 13.656 9 12C9 10.344 10.344 9 12 9Z"}),
          h('path', {"d":"M15 12L22 12"}),
          h('path', {"d":"M2 12L9 12"})
        ]
      );
  }
});

export default GitCommitHorizontal;
export { GitCommitHorizontal };
