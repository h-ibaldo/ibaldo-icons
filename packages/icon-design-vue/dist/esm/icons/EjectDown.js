import { defineComponent, h } from 'vue';

const EjectDown = defineComponent({
  name: 'EjectDown',
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
          h('path', {"d":"M4.918 8L19.082 8C20.32 8 21.063 9.371 20.391 10.41L13.309 21.293C12.691 22.234 11.309 22.234 10.691 21.293L3.609 10.41C2.938 9.371 3.68 8 4.918 8Z"}),
          h('path', {"d":"M4 2L20 2"})
        ]
      );
  }
});

export default EjectDown;
export { EjectDown };
