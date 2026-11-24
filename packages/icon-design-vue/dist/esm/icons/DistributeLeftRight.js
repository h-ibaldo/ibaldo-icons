import { defineComponent, h } from 'vue';

const DistributeLeftRight = defineComponent({
  name: 'DistributeLeftRight',
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
          h('path', {"d":"M21 22L21 2"}),
          h('path', {"d":"M3 2L3 22"}),
          h('path', {"d":"M4 8L8 8C8.551 8 9 8.449 9 9L9 15C9 15.551 8.551 16 8 16L4 16C3.449 16 3 15.551 3 15L3 9C3 8.449 3.449 8 4 8Z"}),
          h('path', {"d":"M20 18L16 18C15.449 18 15 17.551 15 17L15 7C15 6.449 15.449 6 16 6L20 6C20.551 6 21 6.449 21 7L21 17C21 17.551 20.551 18 20 18Z"})
        ]
      );
  }
});

export default DistributeLeftRight;
export { DistributeLeftRight };
