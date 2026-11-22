import { defineComponent, h } from 'vue';

const RouterAntennaLock = defineComponent({
  name: 'RouterAntennaLock',
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
          h('path', {"d":"M7 15L7 3"}),
          h('path', {"d":"M5 15L19 15C20.656 15 22 16.344 22 18C22 19.656 20.656 21 19 21L5 21C3.344 21 2 19.656 2 18C2 16.344 3.344 15 5 15Z"}),
          h('path', {"d":"M19 18L18 18"}),
          h('path', {"d":"M15 18L14 18"}),
          h('path', {"d":"M11 18L10 18"}),
          h('path', {"d":"M16.5 6L10.5 6L10.5 11L16.5 11Z"}),
          h('path', {"d":"M13.5 2C12.176 2 11.102 3.074 11.102 4.398L11.102 6L15.898 6L15.898 4.398C15.898 3.074 14.824 2 13.5 2Z"})
        ]
      );
  }
});

export default RouterAntennaLock;
export { RouterAntennaLock };
