import { defineComponent, h } from 'vue';

const BrainSettings = defineComponent({
  name: 'BrainSettings',
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
          h('path', {"d":"M12 20C12 21.656 10.656 22 9 22C7.344 22 6 20.656 6 19C6 18.645 6.063 18.305 6.176 17.988C3.84 17.82 2 15.875 2 13.5C2 11.617 3.156 10.004 4.801 9.332C4.309 8.875 4 8.223 4 7.5C4 6.121 5.121 5 6.5 5C6.695 5 6.883 5.023 7.063 5.063C7.023 4.883 7 4.695 7 4.5C7 3.121 8.121 2 9.5 2C10.879 2 12 2.121 12 3.5"}),
          h('path', {"d":"M12 20C12 21.656 13.344 22 15 22C16.656 22 18 20.656 18 19C18 18.645 17.938 18.305 17.824 17.988C20.16 17.82 22 15.875 22 13.5C22 11.617 20.844 10.004 19.199 9.332C19.691 8.875 20 8.223 20 7.5C20 6.121 18.879 5 17.5 5C17.305 5 17.117 5.023 16.938 5.063C16.977 4.883 17 4.695 17 4.5C17 3.121 15.879 2 14.5 2C13.121 2 12 2.121 12 3.5"}),
          h('path', {"d":"M15.5 12C15.5 13.934 13.934 15.5 12 15.5C10.066 15.5 8.5 13.934 8.5 12C8.5 10.066 10.066 8.5 12 8.5C13.934 8.5 15.5 10.066 15.5 12Z"}),
          h('path', {"d":"M12 12.012L12 12"}),
          h('path', {"d":"M12 7L12 8.5"}),
          h('path', {"d":"M12 15.5L12 17"}),
          h('path', {"d":"M17 12L15.5 12"}),
          h('path', {"d":"M8.5 12L7 12"}),
          h('path', {"d":"M15.535 15.535L14.477 14.477"}),
          h('path', {"d":"M9.523 9.523L8.465 8.465"}),
          h('path', {"d":"M8.465 15.535L9.523 14.477"}),
          h('path', {"d":"M14.477 9.523L15.535 8.465"})
        ]
      );
  }
});

export default BrainSettings;
export { BrainSettings };
