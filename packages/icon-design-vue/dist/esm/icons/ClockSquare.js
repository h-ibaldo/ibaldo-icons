import { defineComponent, h } from 'vue';

const ClockSquare = defineComponent({
  name: 'ClockSquare',
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
          h('path', {"d":"M18 22L6 22C3.789 22 2 20.211 2 18L2 6C2 3.789 3.789 2 6 2L18 2C20.211 2 22 3.789 22 6L22 18C22 20.211 20.211 22 18 22Z"}),
          h('path', {"d":"M18 12C18 8.688 15.313 6 12 6C8.688 6 6 8.688 6 12C6 15.313 8.688 18 12 18C15.313 18 18 15.313 18 12Z"}),
          h('path', {"d":"M12 9L12 12L14 13"})
        ]
      );
  }
});

export default ClockSquare;
export { ClockSquare };
