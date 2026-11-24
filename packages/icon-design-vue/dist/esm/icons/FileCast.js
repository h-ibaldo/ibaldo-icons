import { defineComponent, h } from 'vue';

const FileCast = defineComponent({
  name: 'FileCast',
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
          h('path', {"d":"M4 9L4 4C4 2.895 4.895 2 6 2L14.016 2C14.646 2 15.25 2.25 15.696 2.696L19.304 6.304C19.75 6.75 20 7.354 20 7.984L20 20C20 21.105 19.105 22 18 22L17 22"}),
          h('path', {"d":"M14 2L14 7C14 7.552 14.448 8 15 8L20 8"}),
          h('path', {"d":"M5 22C5 21.448 4.552 21 4 21"}),
          h('path', {"d":"M9 22C9 19.239 6.761 17 4 17"}),
          h('path', {"d":"M13 22C13 17.029 8.971 13 4 13"})
        ]
      );
  }
});

export default FileCast;
export { FileCast };
