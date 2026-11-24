import { defineComponent, h } from 'vue';

const ClosedCaptionOctagon = defineComponent({
  name: 'ClosedCaptionOctagon',
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
          h('path', {"d":"M7.414 2.586L2.586 7.414C2.211 7.789 2 8.297 2 8.828L2 15.172C2 15.703 2.211 16.211 2.586 16.586L7.414 21.414C7.789 21.789 8.297 22 8.828 22L15.172 22C15.703 22 16.211 21.789 16.586 21.414L21.414 16.586C21.789 16.211 22 15.703 22 15.172L22 8.828C22 8.297 21.789 7.789 21.414 7.414L16.586 2.586C16.211 2.211 15.703 2 15.172 2L8.828 2C8.297 2 7.789 2.211 7.414 2.586Z"}),
          h('path', {"d":"M10 15L9 15C7.895 15 7 14.105 7 13L7 11C7 9.895 7.895 9 9 9L10 9"}),
          h('path', {"d":"M17 15L16 15C14.895 15 14 14.105 14 13L14 11C14 9.895 14.895 9 16 9L17 9"})
        ]
      );
  }
});

export default ClosedCaptionOctagon;
export { ClosedCaptionOctagon };
