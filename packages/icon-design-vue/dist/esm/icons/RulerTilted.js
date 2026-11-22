import { defineComponent, h } from 'vue';

const RulerTilted = defineComponent({
  name: 'RulerTilted',
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
          h('path', {"d":"M8.465 2.809L21.191 15.535C21.582 15.926 21.582 16.559 21.191 16.949L16.949 21.191C16.559 21.582 15.926 21.582 15.535 21.191L2.809 8.465C2.418 8.074 2.418 7.441 2.809 7.051L7.051 2.809C7.441 2.418 8.074 2.418 8.465 2.809Z"}),
          h('path', {"d":"M8.465 7.051L10.586 4.93"}),
          h('path', {"d":"M11.293 9.879L13.414 7.758"}),
          h('path', {"d":"M14.121 12.707L16.242 10.586"}),
          h('path', {"d":"M16.949 15.535L19.07 13.414"})
        ]
      );
  }
});

export default RulerTilted;
export { RulerTilted };
