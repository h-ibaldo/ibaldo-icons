import { defineComponent, h } from 'vue';

const FileMusicCut = defineComponent({
  name: 'FileMusicCut',
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
          h('path', {"d":"M21 15L18 14L18 21"}),
          h('path', {"d":"M18 21C18 21.551 17.328 22 16.5 22C15.672 22 15 21.551 15 21C15 20.449 15.672 20 16.5 20C17.328 20 18 20.449 18 21Z"}),
          h('path', {"d":"M20 10L20 7.828C20 7.297 19.789 6.789 19.414 6.414L15.586 2.586C15.211 2.211 14.703 2 14.172 2L6 2C4.895 2 4 2.895 4 4L4 20C4 21.105 4.895 22 6 22L11 22"})
        ]
      );
  }
});

export default FileMusicCut;
export { FileMusicCut };
