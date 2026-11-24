import { defineComponent, h } from 'vue';

const VolumeTranslate = defineComponent({
  name: 'VolumeTranslate',
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
          h('path', {"d":"M2 10L2 14C2 14.555 2.445 15 3 15L5 15L9.293 19.293C9.922 19.922 11 19.477 11 18.586L11 5.414C11 4.523 9.922 4.078 9.293 4.707L5 9L3 9C2.445 9 2 9.445 2 10Z"}),
          h('path', {"d":"M14 10L22 10"}),
          h('path', {"d":"M18 8L18 10"}),
          h('path', {"d":"M14.5 16C17.922 16 20.719 13.355 20.977 10"}),
          h('path', {"d":"M16.008 13C17.16 14.805 19.176 16 21.477 16"})
        ]
      );
  }
});

export default VolumeTranslate;
export { VolumeTranslate };
