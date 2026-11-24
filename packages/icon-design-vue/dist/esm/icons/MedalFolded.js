import { defineComponent, h } from 'vue';

const MedalFolded = defineComponent({
  name: 'MedalFolded',
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
          h('path', {"d":"M16 18C16 20.211 14.211 22 12 22C9.789 22 8 20.211 8 18C8 15.789 9.789 14 12 14C14.211 14 16 15.789 16 18Z"}),
          h('path', {"d":"M9 11L15 11L21 4.5L17 2Z"}),
          h('path', {"d":"M12 7.625L7 2L3 4.5L9 11"})
        ]
      );
  }
});

export default MedalFolded;
export { MedalFolded };
