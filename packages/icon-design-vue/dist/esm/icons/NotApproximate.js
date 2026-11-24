import { defineComponent, h } from 'vue';

const NotApproximate = defineComponent({
  name: 'NotApproximate',
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
          h('path', {"d":"M5 9L5.605 8.547C7.555 7.086 10.277 7.277 12 9C13.723 10.723 16.445 10.914 18.395 9.453L19 9"}),
          h('path', {"d":"M5 15.434L5.605 14.977C7.555 13.52 10.277 13.711 12 15.434C13.723 17.152 16.445 17.348 18.395 15.887L19 15.434"}),
          h('path', {"d":"M8 19L16 5"})
        ]
      );
  }
});

export default NotApproximate;
export { NotApproximate };
