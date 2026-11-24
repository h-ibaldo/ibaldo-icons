import { defineComponent, h } from 'vue';

const TagBarsTilted = defineComponent({
  name: 'TagBarsTilted',
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
          h('path', {"d":"M20 5L20 10.586C20 10.852 19.895 11.105 19.707 11.293L10.707 20.293C10.316 20.684 9.684 20.684 9.293 20.293L3.707 14.707C3.316 14.316 3.316 13.684 3.707 13.293L12.707 4.293C12.895 4.105 13.148 4 13.414 4L19 4C19.551 4 20 4.449 20 5Z"}),
          h('path', {"d":"M15.5 9C15.777 9 16 8.777 16 8.5C16 8.223 15.777 8 15.5 8C15.223 8 15 8.223 15 8.5C15 8.777 15.223 9 15.5 9Z"}),
          h('path', {"d":"M11 11L13 13"}),
          h('path', {"d":"M8.5 13.5L10.5 15.5"})
        ]
      );
  }
});

export default TagBarsTilted;
export { TagBarsTilted };
