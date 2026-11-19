import { defineComponent, h } from 'vue';

const WindowTogglePlain = defineComponent({
  name: 'WindowTogglePlain',
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
          h('path', {"d":"M16 17L8 17C6.895 17 6 16.105 6 15C6 13.895 6.895 13 8 13L16 13C17.105 13 18 13.895 18 15C18 16.105 17.105 17 16 17Z"}),
          h('path', {"d":"M10 13L10 17"})
        ]
      );
  }
});

export default WindowTogglePlain;
export { WindowTogglePlain };
