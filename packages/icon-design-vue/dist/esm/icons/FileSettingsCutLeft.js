import { defineComponent, h } from 'vue';

const FileSettingsCutLeft = defineComponent({
  name: 'FileSettingsCutLeft',
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
          h('path', {"d":"M19 9L19 4C19 2.895 18.105 2 17 2L8.984 2C8.355 2 7.75 2.25 7.305 2.695L3.695 6.305C3.25 6.75 3 7.355 3 7.984L3 20C3 21.105 3.895 22 5 22L10 22"}),
          h('path', {"d":"M20.5 17C20.5 18.934 18.934 20.5 17 20.5C15.066 20.5 13.5 18.934 13.5 17C13.5 15.066 15.066 13.5 17 13.5C18.934 13.5 20.5 15.066 20.5 17Z"}),
          h('path', {"d":"M17 17.012L17 17"}),
          h('path', {"d":"M17 12L17 13.5"}),
          h('path', {"d":"M17 20.5L17 22"}),
          h('path', {"d":"M22 17L20.5 17"}),
          h('path', {"d":"M13.5 17L12 17"}),
          h('path', {"d":"M20.535 20.535L19.477 19.477"}),
          h('path', {"d":"M14.523 14.523L13.465 13.465"}),
          h('path', {"d":"M13.465 20.535L14.523 19.477"}),
          h('path', {"d":"M19.477 14.523L20.535 13.465"})
        ]
      );
  }
});

export default FileSettingsCutLeft;
export { FileSettingsCutLeft };
