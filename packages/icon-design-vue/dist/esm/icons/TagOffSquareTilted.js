import { defineComponent, h } from 'vue';

const TagOffSquareTilted = defineComponent({
  name: 'TagOffSquareTilted',
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
          h('path', {"d":"M17 22L7 22C4.238 22 2 19.762 2 17L2 7C2 4.238 4.238 2 7 2L17 2C19.762 2 22 4.238 22 7L22 17C22 19.762 19.762 22 17 22Z"}),
          h('path', {"d":"M9.5 9.5L9.5 9.5"}),
          h('path', {"d":"M20.535 3.465L3.465 20.535"}),
          h('path', {"d":"M9.5 14.5L12.793 17.793C13.184 18.184 13.816 18.184 14.207 17.793L17.793 14.207C18.184 13.816 18.184 13.184 17.793 12.793L14.5 9.5"}),
          h('path', {"d":"M12.535 7.535L11.793 6.793C11.605 6.605 11.352 6.5 11.086 6.5L7.5 6.5C6.949 6.5 6.5 6.949 6.5 7.5L6.5 11.086C6.5 11.352 6.605 11.605 6.793 11.793L7.535 12.535"})
        ]
      );
  }
});

export default TagOffSquareTilted;
export { TagOffSquareTilted };
