import { defineComponent, h } from 'vue';

const PointerCrosshair = defineComponent({
  name: 'PointerCrosshair',
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
          h('path', {"d":"M22 16C22 12.688 19.313 10 16 10C12.688 10 10 12.688 10 16C10 19.313 12.688 22 16 22C19.313 22 22 19.313 22 16Z"}),
          h('path', {"d":"M16 22L16 10"}),
          h('path', {"d":"M10 16L22 16"}),
          h('path', {"d":"M12.898 5.406L2.781 2.246C2.449 2.141 2.141 2.449 2.242 2.781L5.406 12.898C5.574 13.434 6.316 13.426 6.492 12.891C7.48 9.871 9.867 7.48 12.891 6.492C13.426 6.316 13.434 5.574 12.898 5.406Z"})
        ]
      );
  }
});

export default PointerCrosshair;
export { PointerCrosshair };
