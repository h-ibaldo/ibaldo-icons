import { defineComponent, h } from 'vue';

const CodeSlashSquareLarge = defineComponent({
  name: 'CodeSlashSquareLarge',
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
          h('path', {"d":"M17 22L7 22C4.238 22 2 19.762 2 17L2 7C2 4.238 4.238 2 7 2L17 2C19.762 2 22 4.238 22 7L22 17C22 19.762 19.762 22 17 22Z"}),
          h('path', {"d":"M9 6C7.895 6 7 6.895 7 8L7 9.172C7 9.703 6.789 10.211 6.414 10.586L5 12L6.414 13.414C6.789 13.789 7 14.297 7 14.828L7 16C7 17.105 7.895 18 9 18"}),
          h('path', {"d":"M15 6C16.105 6 17 6.895 17 8L17 9.172C17 9.703 17.211 10.211 17.586 10.586L19 12L17.586 13.414C17.211 13.789 17 14.297 17 14.828L17 16C17 17.105 16.105 18 15 18"}),
          h('path', {"d":"M11 15L13 9"})
        ]
      );
  }
});

export default CodeSlashSquareLarge;
export { CodeSlashSquareLarge };
