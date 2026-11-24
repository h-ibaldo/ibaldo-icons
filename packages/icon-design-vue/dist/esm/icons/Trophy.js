import { defineComponent, h } from 'vue';

const Trophy = defineComponent({
  name: 'Trophy',
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
          h('path', {"d":"M12 17C8.688 17 6 14.313 6 11L6 2L18 2L18 11C18 14.313 15.313 17 12 17Z"}),
          h('path', {"d":"M18 11L18.5 11C20.434 11 22 9.434 22 7.5C22 5.566 20.434 4 18.5 4L18 4"}),
          h('path', {"d":"M6 11L5.5 11C3.566 11 2 9.434 2 7.5C2 5.566 3.566 4 5.5 4L6 4"}),
          h('path', {"d":"M8 22L16 22"}),
          h('path', {"d":"M12 17L12 22"})
        ]
      );
  }
});

export default Trophy;
export { Trophy };
