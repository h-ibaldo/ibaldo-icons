import { defineComponent, h } from 'vue';

const AlignLeft = defineComponent({
  name: 'AlignLeft',
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
          h('path', {"d":"M2 22L2 2"}),
          h('path', {"d":"M22 6.094L22 9C22 9.605 21.512 10.094 20.902 10.094L8 10.094C7.395 10.094 6.902 9.605 6.902 9L6.902 6.094C6.902 5.488 7.395 5 8 5L20.902 5C21.512 5 22 5.488 22 6.094Z"}),
          h('path', {"d":"M16.191 15.191L16.191 18C16.191 18.605 15.699 19.094 15.094 19.094L8 19.094C7.395 19.094 6.906 18.605 6.906 18L6.906 15.191C6.906 14.586 7.395 14.094 8 14.094L15.094 14.094C15.699 14.094 16.191 14.586 16.191 15.191Z"})
        ]
      );
  }
});

export default AlignLeft;
export { AlignLeft };
