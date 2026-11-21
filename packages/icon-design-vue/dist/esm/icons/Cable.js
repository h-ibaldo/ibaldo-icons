import { defineComponent, h } from 'vue';

const Cable = defineComponent({
  name: 'Cable',
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
          h('path', {"d":"M6 2L6 5"}),
          h('path', {"d":"M18 22L18 19"}),
          h('path', {"d":"M4 5L8 5L8 9C8 10.105 7.105 11 6 11C4.895 11 4 10.105 4 9Z"}),
          h('path', {"d":"M20 19L16 19L16 15C16 13.895 16.895 13 18 13C19.105 13 20 13.895 20 15Z"}),
          h('path', {"d":"M6 11L6 15.156C6 17.23 8.766 17.934 9.758 16.113L14.242 7.887C15.234 6.066 18 6.77 18 8.844L18 13"})
        ]
      );
  }
});

export default Cable;
export { Cable };
