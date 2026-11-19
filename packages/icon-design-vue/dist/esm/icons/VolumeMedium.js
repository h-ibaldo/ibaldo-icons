import { defineComponent, h } from 'vue';

const VolumeMedium = defineComponent({
  name: 'VolumeMedium',
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
          h('path', {"d":"M16.828 14.828C17.551 14.105 18 13.105 18 12C18 10.895 17.551 9.895 16.828 9.172"}),
          h('path', {"d":"M18.949 16.949C20.215 15.684 21 13.934 21 12C21 10.066 20.215 8.316 18.949 7.051"}),
          h('path', {"d":"M4 10L4 14C4 14.555 4.449 15 5 15L7 15L12.348 19.586C12.996 20.141 14 19.68 14 18.824L14 5.176C14 4.32 12.996 3.859 12.348 4.414L7 9L5 9C4.449 9 4 9.445 4 10Z"})
        ]
      );
  }
});

export default VolumeMedium;
export { VolumeMedium };
