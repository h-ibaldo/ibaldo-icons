import { defineComponent, h } from 'vue';

const ArrowUpLeftCircleJoined = defineComponent({
  name: 'ArrowUpLeftCircleJoined',
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
          h('path', {"d":"M14 9L9 9L9 14"}),
          h('path', {"d":"M14.438 21.688C12.453 22.188 10.266 22.164 7.918 21.051C4.602 19.48 2.234 16.273 2.02 12.609C1.652 6.418 6.918 1.355 13.172 2.066C17.805 2.594 21.531 6.414 21.957 11.059C22.102 12.633 21.879 14.141 21.367 15.508C20.617 17.508 17.988 17.988 16.477 16.477L9 9"})
        ]
      );
  }
});

export default ArrowUpLeftCircleJoined;
export { ArrowUpLeftCircleJoined };
