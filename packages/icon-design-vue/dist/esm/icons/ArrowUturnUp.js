import { defineComponent, h } from 'vue';

const ArrowUturnUp = defineComponent({
  name: 'ArrowUturnUp',
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
          h('path', {"d":"M12 7L16 3L20 7"}),
          h('path', {"d":"M16 3L16 15C16 18.313 13.313 21 10 21C6.688 21 4 18.313 4 15L4 12"})
        ]
      );
  }
});

export default ArrowUturnUp;
export { ArrowUturnUp };
