import { defineComponent, h } from 'vue';

const AlignRight = defineComponent({
  name: 'AlignRight',
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
          h('path', {"d":"M22 22L22 2"}),
          h('path', {"d":"M2 6.094L2 9C2 9.605 2.488 10.094 3.098 10.094L16 10.094C16.605 10.094 17.098 9.605 17.098 9L17.098 6.094C17.098 5.488 16.605 5 16 5L3.098 5C2.488 5 2 5.488 2 6.094Z"}),
          h('path', {"d":"M7.809 15.191L7.809 18C7.809 18.605 8.301 19.094 8.906 19.094L16 19.094C16.605 19.094 17.094 18.605 17.094 18L17.094 15.191C17.094 14.586 16.605 14.094 16 14.094L8.906 14.094C8.301 14.094 7.809 14.586 7.809 15.191Z"})
        ]
      );
  }
});

export default AlignRight;
export { AlignRight };
