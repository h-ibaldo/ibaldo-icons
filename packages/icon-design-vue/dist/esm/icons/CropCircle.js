import { defineComponent, h } from 'vue';

const CropCircle = defineComponent({
  name: 'CropCircle',
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
          h('path', {"d":"M22 12C22 6.477 17.523 2 12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12Z"}),
          h('path', {"d":"M9 7L9 14C9 14.551 9.445 15 10 15L17 15"}),
          h('path', {"d":"M15 12L15 10C15 9.449 14.555 9 14 9L12 9"}),
          h('path', {"d":"M9 9L7 9"}),
          h('path', {"d":"M15 17L15 15"})
        ]
      );
  }
});

export default CropCircle;
export { CropCircle };
