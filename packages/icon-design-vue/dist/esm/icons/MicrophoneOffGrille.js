import { defineComponent, h } from 'vue';

const MicrophoneOffGrille = defineComponent({
  name: 'MicrophoneOffGrille',
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
          h('path', {"d":"M12 18L12 21"}),
          h('path', {"d":"M9 8L7 8"}),
          h('path', {"d":"M17 12L14 12"}),
          h('path', {"d":"M7 22L17 22"}),
          h('path', {"d":"M4 18L20 2"}),
          h('path', {"d":"M7.27 14.73C7.902 16.625 9.672 18 11.781 18L12.219 18C14.859 18 17 15.859 17 13.219L17 6.781C17 6.25 16.895 5.746 16.734 5.266"}),
          h('path', {"d":"M14.434 2.566C13.77 2.215 13.023 2 12.219 2L11.781 2C9.141 2 7 4.141 7 6.781L7 10"})
        ]
      );
  }
});

export default MicrophoneOffGrille;
export { MicrophoneOffGrille };
