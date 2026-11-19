import { defineComponent, h } from 'vue';

const ArrowUturnUpFlippedXCircle = defineComponent({
  name: 'ArrowUturnUpFlippedXCircle',
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
          h('path', {"d":"M2 12L5 9L8 12"}),
          h('path', {"d":"M22 7.5C22 4.461 19.539 2 16.5 2C13.461 2 11 4.461 11 7.5C11 10.539 13.461 13 16.5 13C19.539 13 22 10.539 22 7.5Z"}),
          h('path', {"d":"M16.91 17C16.434 19.836 13.973 22 11 22C7.688 22 5 19.313 5 16L5 9"}),
          h('path', {"d":"M15 9L18 6"}),
          h('path', {"d":"M15 6L18 9"})
        ]
      );
  }
});

export default ArrowUturnUpFlippedXCircle;
export { ArrowUturnUpFlippedXCircle };
