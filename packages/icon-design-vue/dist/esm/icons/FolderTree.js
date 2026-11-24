import { defineComponent, h } from 'vue';

const FolderTree = defineComponent({
  name: 'FolderTree',
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
          h('path', {"d":"M3 8L9 8C9.551 8 10 7.551 10 7L10 5C10 4.449 9.551 4 9 4L6 4L6 3C6 2.449 5.551 2 5 2L3 2C2.449 2 2 2.449 2 3L2 7C2 7.551 2.449 8 3 8Z"}),
          h('path', {"d":"M15 12L21 12C21.551 12 22 11.551 22 11L22 9C22 8.449 21.551 8 21 8L18 8L18 7C18 6.449 17.551 6 17 6L15 6C14.449 6 14 6.449 14 7L14 11C14 11.551 14.449 12 15 12Z"}),
          h('path', {"d":"M15 22L21 22C21.551 22 22 21.551 22 21L22 19C22 18.449 21.551 18 21 18L18 18L18 17C18 16.449 17.551 16 17 16L15 16C14.449 16 14 16.449 14 17L14 21C14 21.551 14.449 22 15 22Z"}),
          h('path', {"d":"M6 11L6 13L10 13"}),
          h('path', {"d":"M6 13L6 20L10 20"})
        ]
      );
  }
});

export default FolderTree;
export { FolderTree };
