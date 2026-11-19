import { defineComponent, h } from 'vue';

const ArrowUpCircleIn = defineComponent({
  name: 'ArrowUpCircleIn',
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
          h('path', {"d":"M9 12L12 9L15 12"}),
          h('path', {"d":"M12 22L12 9"}),
          h('path', {"d":"M17 20.648C19.984 18.918 22 15.699 22 12C22 6.477 17.523 2 12 2C6.477 2 2 6.477 2 12C2 15.699 4.016 18.918 7 20.648"})
        ]
      );
  }
});

export default ArrowUpCircleIn;
export { ArrowUpCircleIn };
