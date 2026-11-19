import { defineComponent, h } from 'vue';

const HourglassSandFallingCurved = defineComponent({
  name: 'HourglassSandFallingCurved',
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
          h('path', {"d":"M9.148 10.512L6.66 6.152C6.227 5.398 6 4.543 6 3.672L6 2L18 2L18 3.672C18 4.543 17.773 5.398 17.34 6.152L14.852 10.512C14.324 11.434 14.324 12.566 14.852 13.488L17.34 17.848C17.773 18.602 18 19.457 18 20.328L18 22L6 22L6 20.328C6 19.457 6.227 18.602 6.66 17.848L9.148 13.488C9.676 12.566 9.676 11.434 9.148 10.512Z"}),
          h('path', {"d":"M10 19L14 19"}),
          h('path', {"d":"M12 8L12 8"})
        ]
      );
  }
});

export default HourglassSandFallingCurved;
export { HourglassSandFallingCurved };
