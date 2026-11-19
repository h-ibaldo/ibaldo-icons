import { defineComponent, h } from 'vue';

const ArrowDownRightCircleJoined = defineComponent({
  name: 'ArrowDownRightCircleJoined',
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
          h('path', {"d":"M10 15L15 15L15 10"}),
          h('path', {"d":"M9.563 2.313C11.547 1.812 13.734 1.836 16.082 2.949C19.398 4.52 21.766 7.727 21.98 11.391C22.348 17.582 17.082 22.645 10.828 21.934C6.195 21.406 2.469 17.586 2.043 12.941C1.898 11.367 2.121 9.859 2.633 8.492C3.383 6.492 6.012 6.012 7.523 7.523L15 15"})
        ]
      );
  }
});

export default ArrowDownRightCircleJoined;
export { ArrowDownRightCircleJoined };
