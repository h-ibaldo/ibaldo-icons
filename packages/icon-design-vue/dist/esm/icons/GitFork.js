import { defineComponent, h } from 'vue';

const GitFork = defineComponent({
  name: 'GitFork',
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
          h('path', {"d":"M5 2C6.656 2 8 3.344 8 5C8 6.656 6.656 8 5 8C3.344 8 2 6.656 2 5C2 3.344 3.344 2 5 2Z"}),
          h('path', {"d":"M19 2C20.656 2 22 3.344 22 5C22 6.656 20.656 8 19 8C17.344 8 16 6.656 16 5C16 3.344 17.344 2 19 2Z"}),
          h('path', {"d":"M12 16C13.656 16 15 17.344 15 19C15 20.656 13.656 22 12 22C10.344 22 9 20.656 9 19C9 17.344 10.344 16 12 16Z"}),
          h('path', {"d":"M5 8L5 12L19 12L19 8"}),
          h('path', {"d":"M12 16L12 12"})
        ]
      );
  }
});

export default GitFork;
export { GitFork };
