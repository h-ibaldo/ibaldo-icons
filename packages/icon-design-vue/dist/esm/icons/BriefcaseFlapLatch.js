import { defineComponent, h } from 'vue';

const BriefcaseFlapLatch = defineComponent({
  name: 'BriefcaseFlapLatch',
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
          h('path', {"d":"M19.586 21L4.414 21C3.082 21 2 19.918 2 18.586L2 9.414C2 8.082 3.082 7 4.414 7L19.586 7C20.918 7 22 8.082 22 9.414L22 18.586C22 19.918 20.918 21 19.586 21Z"}),
          h('path', {"d":"M16 7L8 7L8 4C8 3.449 8.449 3 9 3L15 3C15.551 3 16 3.449 16 4Z"}),
          h('path', {"d":"M2.305 8.262L7 14L17 14L21.695 8.262"}),
          h('path', {"d":"M12 12L12 16"})
        ]
      );
  }
});

export default BriefcaseFlapLatch;
export { BriefcaseFlapLatch };
