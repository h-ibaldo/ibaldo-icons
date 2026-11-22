import { defineComponent, h } from 'vue';

const DistributeCenterVertical = defineComponent({
  name: 'DistributeCenterVertical',
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
          h('path', {"d":"M18 7L22 7"}),
          h('path', {"d":"M2 7L6 7"}),
          h('path', {"d":"M18 5L18 9C18 9.551 17.551 10 17 10L7 10C6.449 10 6 9.551 6 9L6 5C6 4.449 6.449 4 7 4L17 4C17.551 4 18 4.449 18 5Z"}),
          h('path', {"d":"M16 17L20 17"}),
          h('path', {"d":"M4 17L8 17"}),
          h('path', {"d":"M16 15L16 19C16 19.551 15.551 20 15 20L9 20C8.449 20 8 19.551 8 19L8 15C8 14.449 8.449 14 9 14L15 14C15.551 14 16 14.449 16 15Z"})
        ]
      );
  }
});

export default DistributeCenterVertical;
export { DistributeCenterVertical };
