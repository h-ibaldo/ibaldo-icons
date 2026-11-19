import { defineComponent, h } from 'vue';

const ArrowSyncCircleHook = defineComponent({
  name: 'ArrowSyncCircleHook',
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
          h('path', {"d":"M10 12L8 14L6 12"}),
          h('path', {"d":"M13 7L11 7C9.344 7 8 8.344 8 10L8 14"}),
          h('path', {"d":"M14 12L16 10L18 12"}),
          h('path', {"d":"M11 17L13 17C14.656 17 16 15.656 16 14L16 10"}),
          h('path', {"d":"M2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2C6.477 2 2 6.477 2 12Z"})
        ]
      );
  }
});

export default ArrowSyncCircleHook;
export { ArrowSyncCircleHook };
