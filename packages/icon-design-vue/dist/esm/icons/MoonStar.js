import { defineComponent, h } from 'vue';

const MoonStar = defineComponent({
  name: 'MoonStar',
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
          h('path', {"d":"M2 12C2 6.477 6.477 2 12 2C12.555 2 13.102 2.047 13.637 2.133C10.422 2.77 8 5.602 8 9C8 12.867 11.133 16 15 16C18.398 16 21.23 13.578 21.867 10.363C21.953 10.898 22 11.441 22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12Z"}),
          h('path', {"d":"M13 8L19 8"}),
          h('path', {"d":"M14.5 10.598L17.5 5.402"}),
          h('path', {"d":"M14.5 5.402L17.5 10.598"})
        ]
      );
  }
});

export default MoonStar;
export { MoonStar };
