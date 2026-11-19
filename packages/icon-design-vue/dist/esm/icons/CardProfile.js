import { defineComponent, h } from 'vue';

const CardProfile = defineComponent({
  name: 'CardProfile',
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
          h('path', {"d":"M20 22L4 22C2.895 22 2 21.105 2 20L2 4C2 2.895 2.895 2 4 2L20 2C21.105 2 22 2.895 22 4L22 20C22 21.105 21.105 22 20 22Z"}),
          h('path', {"d":"M2 13L22 13"}),
          h('path', {"d":"M10 7.5C10 6.117 8.883 5 7.5 5C6.117 5 5 6.117 5 7.5C5 8.883 6.117 10 7.5 10C8.883 10 10 8.883 10 7.5Z"}),
          h('path', {"d":"M14 6L18 6"}),
          h('path', {"d":"M14 9L18 9"})
        ]
      );
  }
});

export default CardProfile;
export { CardProfile };
