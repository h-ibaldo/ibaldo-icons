import { defineComponent, h } from 'vue';

const CompassPocket = defineComponent({
  name: 'CompassPocket',
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
          h('path', {"d":"M20 14C20 18.418 16.418 22 12 22C7.582 22 4 18.418 4 14C4 9.582 7.582 6 12 6C16.418 6 20 9.582 20 14Z"}),
          h('path', {"d":"M14 4C14 5.105 13.105 6 12 6C10.895 6 10 5.105 10 4C10 2.895 10.895 2 12 2C13.105 2 14 2.895 14 4Z"}),
          h('path', {"d":"M13 14C13 13.449 12.555 13 12 13C11.445 13 11 13.449 11 14C11 14.551 11.445 15 12 15C12.555 15 13 14.551 13 14Z"}),
          h('path', {"d":"M11.293 14.707L9 17"}),
          h('path', {"d":"M15 11L12.707 13.293"})
        ]
      );
  }
});

export default CompassPocket;
export { CompassPocket };
