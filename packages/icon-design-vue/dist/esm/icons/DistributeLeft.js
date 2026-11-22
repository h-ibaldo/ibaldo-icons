import { defineComponent, h } from 'vue';

const DistributeLeft = defineComponent({
  name: 'DistributeLeft',
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
          h('path', {"d":"M3 2L3 22"}),
          h('path', {"d":"M15 2L15 22"}),
          h('path', {"d":"M16 8L20 8C20.551 8 21 8.449 21 9L21 15C21 15.551 20.551 16 20 16L16 16C15.449 16 15 15.551 15 15L15 9C15 8.449 15.449 8 16 8Z"}),
          h('path', {"d":"M4 6L8 6C8.551 6 9 6.449 9 7L9 17C9 17.551 8.551 18 8 18L4 18C3.449 18 3 17.551 3 17L3 7C3 6.449 3.449 6 4 6Z"})
        ]
      );
  }
});

export default DistributeLeft;
export { DistributeLeft };
