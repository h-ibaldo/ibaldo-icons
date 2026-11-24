import { defineComponent, h } from 'vue';

const ArrowUturnDownFlippedDotsCircle = defineComponent({
  name: 'ArrowUturnDownFlippedDotsCircle',
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
          h('path', {"d":"M2 12L5 15L8 12"}),
          h('path', {"d":"M22 16.5C22 19.539 19.539 22 16.5 22C13.461 22 11 19.539 11 16.5C11 13.461 13.461 11 16.5 11C19.539 11 22 13.461 22 16.5Z"}),
          h('path', {"d":"M14.75 16.5L14.75 16.5"}),
          h('path', {"d":"M18.25 16.5L18.25 16.5"}),
          h('path', {"d":"M16.91 7C16.434 4.164 13.973 2 11 2C7.688 2 5 4.688 5 8L5 15"})
        ]
      );
  }
});

export default ArrowUturnDownFlippedDotsCircle;
export { ArrowUturnDownFlippedDotsCircle };
