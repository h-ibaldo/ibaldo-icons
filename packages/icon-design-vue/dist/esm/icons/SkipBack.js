import { defineComponent, h } from 'vue';

const SkipBack = defineComponent({
  name: 'SkipBack',
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
          h('path', {"d":"M21 4.918L21 19.082C21 20.32 19.629 21.063 18.59 20.391L7.707 13.309C6.766 12.691 6.766 11.309 7.707 10.691L18.59 3.609C19.629 2.938 21 3.68 21 4.918Z"}),
          h('path', {"d":"M3 4L3 20"})
        ]
      );
  }
});

export default SkipBack;
export { SkipBack };
