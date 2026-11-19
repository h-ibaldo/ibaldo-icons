import { defineComponent, h } from 'vue';

const VolumeBluetooth = defineComponent({
  name: 'VolumeBluetooth',
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
          h('path', {"d":"M19 10L19 22"}),
          h('path', {"d":"M16 13L19 16L22 13L19 10"}),
          h('path', {"d":"M19 22L22 19L19 16L16 19"}),
          h('path', {"d":"M12 16L12 3C12 2.203 11.109 1.727 10.445 2.168L6 6L3 6C2.449 6 2 6.449 2 7L2 11.867C2 12.418 2.449 12.867 3 12.867L6 12.867L10.445 16.832C11.109 17.273 12 16.797 12 16Z"})
        ]
      );
  }
});

export default VolumeBluetooth;
export { VolumeBluetooth };
