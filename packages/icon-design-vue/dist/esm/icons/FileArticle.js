import { defineComponent, h } from 'vue';

const FileArticle = defineComponent({
  name: 'FileArticle',
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
          h('path', {"d":"M18.984 22L5 22C3.895 22 3 21.105 3 20L3 4C3 2.895 3.895 2 5 2L15 2C15.63 2 16.234 2.25 16.68 2.696L20.288 6.304C20.734 6.75 20.984 7.354 20.984 7.984L20.984 20C20.984 21.105 20.089 22 18.984 22Z"}),
          h('path', {"d":"M15 2L15 7C15 7.552 15.448 8 16 8L21 8"}),
          h('path', {"d":"M11 10L7 10L7 6L11 6L11 10Z"}),
          h('path', {"d":"M7 14L17 14"}),
          h('path', {"d":"M7 18L17 18"})
        ]
      );
  }
});

export default FileArticle;
export { FileArticle };
