import { defineComponent, h } from 'vue';

const VoicemailSquare = defineComponent({
  name: 'VoicemailSquare',
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
          h('path', {"d":"M5 11.5C5 10.121 6.121 9 7.5 9C8.879 9 10 10.121 10 11.5C10 12.879 8.879 14 7.5 14C6.121 14 5 12.879 5 11.5Z"}),
          h('path', {"d":"M14 11.5C14 10.121 15.121 9 16.5 9C17.879 9 19 10.121 19 11.5C19 12.879 17.879 14 16.5 14C15.121 14 14 12.879 14 11.5Z"}),
          h('path', {"d":"M7.5 14L16.5 14"}),
          h('path', {"d":"M5 4L19 4C20.656 4 22 5.344 22 7L22 17C22 18.656 20.656 20 19 20L5 20C3.344 20 2 18.656 2 17L2 7C2 5.344 3.344 4 5 4Z"})
        ]
      );
  }
});

export default VoicemailSquare;
export { VoicemailSquare };
