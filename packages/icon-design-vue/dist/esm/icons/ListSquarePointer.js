import { defineComponent, h } from 'vue';

const ListSquarePointer = defineComponent({
  name: 'ListSquarePointer',
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
          h('path', {"d":"M11 22L5 22C3.344 22 2 20.656 2 19L2 5C2 3.344 3.344 2 5 2L19 2C20.656 2 22 3.344 22 5L22 11"}),
          h('path', {"d":"M7 7L17 7"}),
          h('path', {"d":"M7 11L17 11"}),
          h('path', {"d":"M7 15L10 15"}),
          h('path', {"d":"M14.52 15.152L16.688 21.66C16.824 22.063 17.371 22.125 17.59 21.758L19.152 19.156L21.758 17.59C22.125 17.371 22.063 16.824 21.66 16.688L15.152 14.52C14.762 14.391 14.391 14.762 14.52 15.152Z"})
        ]
      );
  }
});

export default ListSquarePointer;
export { ListSquarePointer };
