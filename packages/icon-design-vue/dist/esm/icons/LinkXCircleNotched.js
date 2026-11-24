import { defineComponent, h } from 'vue';

const LinkXCircleNotched = defineComponent({
  name: 'LinkXCircleNotched',
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
          h('path', {"d":"M7 14L14 7"}),
          h('path', {"d":"M17.965 8.035C19.344 6.652 19.344 4.418 17.965 3.035C16.586 1.652 14.344 1.652 12.965 3.035L11.5 4.5C10.121 5.883 10.121 8.121 11.5 9.5"}),
          h('path', {"d":"M9.5 11.5C8.117 10.117 5.883 10.117 4.5 11.5L3.035 12.965C1.656 14.344 1.656 16.586 3.035 17.965C4.414 19.344 6.656 19.344 8.035 17.965"}),
          h('path', {"d":"M22 16.5C22 19.535 19.539 22 16.5 22C13.461 22 11 19.535 11 16.5C11 13.465 13.461 11 16.5 11C19.539 11 22 13.465 22 16.5Z"}),
          h('path', {"d":"M18 15L15 18"}),
          h('path', {"d":"M15 15L18 18"})
        ]
      );
  }
});

export default LinkXCircleNotched;
export { LinkXCircleNotched };
