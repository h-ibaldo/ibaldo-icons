import { defineComponent, h } from 'vue';

const AwardRound = defineComponent({
  name: 'AwardRound',
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
          h('path', {"d":"M12.922 14.922L18 20L19 17L22 16L17.465 11.465"}),
          h('path', {"d":"M18 9C18 12.313 15.313 15 12 15C8.688 15 6 12.313 6 9C6 5.688 8.688 3 12 3C15.313 3 18 5.688 18 9Z"}),
          h('path', {"d":"M6.535 11.465L2 16L5 17L6 20L11.078 14.922"})
        ]
      );
  }
});

export default AwardRound;
export { AwardRound };
