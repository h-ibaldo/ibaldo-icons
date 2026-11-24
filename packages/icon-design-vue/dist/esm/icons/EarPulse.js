import { defineComponent, h } from 'vue';

const EarPulse = defineComponent({
  name: 'EarPulse',
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
          h('path', {"d":"M18 9L18 8.5C18 7.119 16.881 6 15.5 6L15.5 6C14.119 6 13 7.119 13 8.5L13 11L13 11C14.105 11 15 11.895 15 13L15 13C15 14.105 14.105 15 13 15L13 15"}),
          h('path', {"d":"M2 13L3 13L5 10L7 16L9 13L10 13"}),
          h('path', {"d":"M9.564 20C10.254 21.191 11.524 22 13 22C15.209 22 17 20.209 17 18C17 16.719 17.509 15.491 18.414 14.586L20.232 12.768C21.364 11.636 22 10.101 22 8.5C22 4.91 19.09 2 15.5 2C12.427 2 9.859 4.135 9.181 7"})
        ]
      );
  }
});

export default EarPulse;
export { EarPulse };
