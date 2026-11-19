import { defineComponent, h } from 'vue';

const TrophyCircle = defineComponent({
  name: 'TrophyCircle',
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
          h('path', {"d":"M12 15C10.344 15 9 13.656 9 12L9 7L15 7L15 12C15 13.656 13.656 15 12 15Z"}),
          h('path', {"d":"M10 18L14 18"}),
          h('path', {"d":"M12 15L12 18"}),
          h('path', {"d":"M14.852 12.891L17.07 11.559C17.648 11.211 18 10.586 18 9.914C18 8.859 17.145 8 16.086 8L15 8"}),
          h('path', {"d":"M9.148 12.891L6.93 11.559C6.352 11.211 6 10.586 6 9.914C6 8.859 6.855 8 7.914 8L9 8"})
        ]
      );
  }
});

export default TrophyCircle;
export { TrophyCircle };
