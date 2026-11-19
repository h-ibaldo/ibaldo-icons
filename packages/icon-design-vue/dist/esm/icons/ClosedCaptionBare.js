import { defineComponent, h } from 'vue';

const ClosedCaptionBare = defineComponent({
  name: 'ClosedCaptionBare',
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
          h('path', {"d":"M10 8.023C9.16 7.391 8.133 7 7 7C4.238 7 2 9.238 2 12C2 14.762 4.238 17 7 17C8.133 17 9.16 16.609 10 15.977"}),
          h('path', {"d":"M22 8.023C21.16 7.391 20.133 7 19 7C16.238 7 14 9.238 14 12C14 14.762 16.238 17 19 17C20.133 17 21.16 16.609 22 15.977"})
        ]
      );
  }
});

export default ClosedCaptionBare;
export { ClosedCaptionBare };
