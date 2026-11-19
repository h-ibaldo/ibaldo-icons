import { defineComponent, h } from 'vue';

const RecordRingCircle = defineComponent({
  name: 'RecordRingCircle',
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
          h('path', {"d":"M22 12C22 6.477 17.523 2 12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12Z"}),
          h('path', {"d":"M14 12C14 9.789 12.211 8 10 8C7.789 8 6 9.789 6 12C6 14.211 7.789 16 10 16C12.211 16 14 14.211 14 12Z"}),
          h('path', {"d":"M16.922 16C17.602 14.82 18 13.461 18 12C18 10.539 17.602 9.18 16.922 8"})
        ]
      );
  }
});

export default RecordRingCircle;
export { RecordRingCircle };
