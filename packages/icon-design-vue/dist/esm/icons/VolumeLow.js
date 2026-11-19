import { defineComponent, h } from 'vue';

const VolumeLow = defineComponent({
  name: 'VolumeLow',
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
          h('path', {"d":"M17.828 14.828C18.551 14.105 19 13.105 19 12C19 10.895 18.551 9.895 17.828 9.172"}),
          h('path', {"d":"M5 10L5 14C5 14.555 5.449 15 6 15L8 15L13.348 19.586C13.996 20.141 15 19.68 15 18.824L15 5.176C15 4.32 13.996 3.859 13.348 4.414L8 9L6 9C5.449 9 5 9.445 5 10Z"})
        ]
      );
  }
});

export default VolumeLow;
export { VolumeLow };
