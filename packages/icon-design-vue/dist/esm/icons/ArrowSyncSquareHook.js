import { defineComponent, h } from 'vue';

const ArrowSyncSquareHook = defineComponent({
  name: 'ArrowSyncSquareHook',
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
          h('path', {"d":"M19 2L5 2C3.344 2 2 3.344 2 5L2 19C2 20.656 3.344 22 5 22L19 22C20.656 22 22 20.656 22 19L22 5C22 3.344 20.656 2 19 2Z"}),
          h('path', {"d":"M10 12L8 14L6 12"}),
          h('path', {"d":"M13 7L11 7C9.344 7 8 8.344 8 10L8 14"}),
          h('path', {"d":"M14 12L16 10L18 12"}),
          h('path', {"d":"M11 17L13 17C14.656 17 16 15.656 16 14L16 10"})
        ]
      );
  }
});

export default ArrowSyncSquareHook;
export { ArrowSyncSquareHook };
