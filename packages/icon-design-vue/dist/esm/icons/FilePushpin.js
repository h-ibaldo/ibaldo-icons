import { defineComponent, h } from 'vue';

const FilePushpin = defineComponent({
  name: 'FilePushpin',
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
          h('path', {"d":"M15 13L11 17L12 18L16 14L15 13Z"}),
          h('path', {"d":"M14 16L18 20"}),
          h('path', {"d":"M20 12L20 7.984C20 7.354 19.75 6.75 19.304 6.304L15.696 2.696C15.25 2.25 14.646 2 14.016 2L6 2C4.895 2 4 2.895 4 4L4 20C4 21.105 4.895 22 6 22L11 22"}),
          h('path', {"d":"M14 2L14 7C14 7.552 14.448 8 15 8L20 8"})
        ]
      );
  }
});

export default FilePushpin;
export { FilePushpin };
