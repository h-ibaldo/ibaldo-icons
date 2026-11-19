import { defineComponent, h } from 'vue';

const WindowKeyholePlain = defineComponent({
  name: 'WindowKeyholePlain',
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
          h('path', {"d":"M19 22L5 22C3.344 22 2 20.656 2 19L2 5C2 3.344 3.344 2 5 2L19 2C20.656 2 22 3.344 22 5L22 19C22 20.656 20.656 22 19 22Z"}),
          h('path', {"d":"M2 8L22 8"}),
          h('path', {"d":"M12 18L12 14"}),
          h('path', {"d":"M13 13C13 13.551 12.551 14 12 14C11.449 14 11 13.551 11 13C11 12.449 11.449 12 12 12C12.551 12 13 12.449 13 13Z"})
        ]
      );
  }
});

export default WindowKeyholePlain;
export { WindowKeyholePlain };
