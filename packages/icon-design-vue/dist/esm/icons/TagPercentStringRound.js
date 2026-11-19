import { defineComponent, h } from 'vue';

const TagPercentStringRound = defineComponent({
  name: 'TagPercentStringRound',
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
          h('path', {"d":"M4 6.828L4 13C4 13.531 4.211 14.039 4.586 14.414L11.586 21.414C12.367 22.195 13.633 22.195 14.414 21.414L20.586 15.242C21.367 14.461 21.367 13.195 20.586 12.414L13.586 5.414C13.211 5.039 12.703 4.828 12.172 4.828L6 4.828C4.895 4.828 4 5.723 4 6.828Z"}),
          h('path', {"d":"M8.5 9.656C8.223 9.656 8 9.434 8 9.156C8 8.883 8.223 8.656 8.5 8.656C8.777 8.656 9 8.883 9 9.156C9 9.434 8.777 9.656 8.5 9.656Z"}),
          h('path', {"d":"M8 1.828L8 8.828"}),
          h('path', {"d":"M13 11L13 11"}),
          h('path', {"d":"M13 17L13 17"}),
          h('path', {"d":"M10 14L16 14"})
        ]
      );
  }
});

export default TagPercentStringRound;
export { TagPercentStringRound };
