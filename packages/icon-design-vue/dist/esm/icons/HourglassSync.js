import { defineComponent, h } from 'vue';

const HourglassSync = defineComponent({
  name: 'HourglassSync',
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
          h('path', {"d":"M14.414 9.586L12 12L9.586 9.586C9.211 9.211 9 8.703 9 8.172L9 7L15 7L15 8.172C15 8.703 14.789 9.211 14.414 9.586Z"}),
          h('path', {"d":"M9.586 14.414L12 12L14.414 14.414C14.789 14.789 15 15.297 15 15.828L15 17L9 17L9 15.828C9 15.297 9.211 14.789 9.586 14.414Z"}),
          h('path', {"d":"M3 4L3 7L6 7"}),
          h('path', {"d":"M21.25 20L21.25 17L18.25 17"}),
          h('path', {"d":"M12 2C8.301 2 5.078 4.016 3.348 7"}),
          h('path', {"d":"M2.051 11C2.02 11.328 2 11.66 2 12C2 17.523 6.477 22 12 22"}),
          h('path', {"d":"M12 22C15.699 22 18.922 19.984 20.652 17"}),
          h('path', {"d":"M21.949 13C21.98 12.672 22 12.34 22 12C22 6.477 17.523 2 12 2"})
        ]
      );
  }
});

export default HourglassSync;
export { HourglassSync };
