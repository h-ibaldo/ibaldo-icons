import { defineComponent, h } from 'vue';

const VolumeLowWide = defineComponent({
  name: 'VolumeLowWide',
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
          h('path', {"d":"M17 13.707C17.594 13.359 18 12.734 18 12C18 11.266 17.594 10.641 17 10.293"}),
          h('path', {"d":"M5 10L5 14C5 14.555 5.445 15 6 15L8 15L12.293 19.293C12.922 19.922 14 19.477 14 18.586L14 5.414C14 4.523 12.922 4.078 12.293 4.707L8 9L6 9C5.445 9 5 9.445 5 10Z"})
        ]
      );
  }
});

export default VolumeLowWide;
export { VolumeLowWide };
