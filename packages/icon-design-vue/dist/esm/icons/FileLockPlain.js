import { defineComponent, h } from 'vue';

const FileLockPlain = defineComponent({
  name: 'FileLockPlain',
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
          h('path', {"d":"M4 9L4 4C4 2.895 4.895 2 6 2L18 2C19.105 2 20 2.895 20 4L20 20C20 21.105 19.105 22 18 22L16 22"}),
          h('path', {"d":"M12 22L4 22L4 17L12 17L12 22Z"}),
          h('path', {"d":"M5 17L5 15C5 13.343 6.343 12 8 12L8 12C9.657 12 11 13.343 11 15L11 17"})
        ]
      );
  }
});

export default FileLockPlain;
export { FileLockPlain };
