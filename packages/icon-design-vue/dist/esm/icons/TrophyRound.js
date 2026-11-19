import { defineComponent, h } from 'vue';

const TrophyRound = defineComponent({
  name: 'TrophyRound',
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
          h('path', {"d":"M12 14C8.688 14 6 11.313 6 8L6 2L18 2L18 8C18 11.313 15.313 14 12 14Z"}),
          h('path', {"d":"M7 22L17 22"}),
          h('path', {"d":"M9 19L15 19"}),
          h('path', {"d":"M12 14L12 16"}),
          h('path', {"d":"M17.711 9.84L20.539 8.625C21.426 8.246 22 7.375 22 6.41C22 5.078 20.922 4 19.59 4L18 4"}),
          h('path', {"d":"M6.289 9.84L3.461 8.625C2.574 8.246 2 7.375 2 6.41C2 5.078 3.078 4 4.41 4L6 4"})
        ]
      );
  }
});

export default TrophyRound;
export { TrophyRound };
