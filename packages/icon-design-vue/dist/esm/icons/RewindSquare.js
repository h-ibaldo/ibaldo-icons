import { defineComponent, h } from 'vue';

const RewindSquare = defineComponent({
  name: 'RewindSquare',
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
          h('path', {"d":"M12 14.922L12 9.078C12 8.301 11.121 7.852 10.488 8.301L6.398 11.223C5.867 11.605 5.867 12.398 6.398 12.777L10.488 15.699C11.121 16.148 12 15.699 12 14.922Z"}),
          h('path', {"d":"M18 14.922L18 9.078C18 8.301 17.121 7.852 16.488 8.301L12.398 11.223C11.867 11.605 11.867 12.398 12.398 12.777L16.488 15.699C17.121 16.148 18 15.699 18 14.922Z"}),
          h('path', {"d":"M19 22L5 22C3.344 22 2 20.656 2 19L2 5C2 3.344 3.344 2 5 2L19 2C20.656 2 22 3.344 22 5L22 19C22 20.656 20.656 22 19 22Z"})
        ]
      );
  }
});

export default RewindSquare;
export { RewindSquare };
