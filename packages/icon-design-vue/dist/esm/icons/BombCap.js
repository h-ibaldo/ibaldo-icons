import { defineComponent, h } from 'vue';

const BombCap = defineComponent({
  name: 'BombCap',
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
          h('path', {"d":"M21 2L17 6"}),
          h('path', {"d":"M17 2L21 6"}),
          h('path', {"d":"M14 4L13 4C11.344 4 10 5.344 10 7L10 8"}),
          h('path', {"d":"M12 10.348L12 9C12 8.449 11.551 8 11 8L9 8C8.449 8 8 8.449 8 9L8 10.348C5.313 11.301 3.5 14.105 4.121 17.234C4.578 19.523 6.418 21.387 8.703 21.863C12.586 22.676 16 19.738 16 16C16 13.391 14.328 11.172 12 10.348Z"})
        ]
      );
  }
});

export default BombCap;
export { BombCap };
