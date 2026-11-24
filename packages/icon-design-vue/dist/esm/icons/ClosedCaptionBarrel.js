import { defineComponent, h } from 'vue';

const ClosedCaptionBarrel = defineComponent({
  name: 'ClosedCaptionBarrel',
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
          h('path', {"d":"M18.883 4L5.117 4C4.281 4 3.535 4.516 3.234 5.297C2.445 7.383 2 9.637 2 12C2 14.363 2.445 16.617 3.234 18.703C3.535 19.484 4.281 20 5.117 20L18.883 20C19.719 20 20.469 19.484 20.762 18.703C21.555 16.617 22 14.363 22 12C22 9.637 21.555 7.383 20.762 5.297C20.469 4.516 19.719 4 18.883 4Z"}),
          h('path', {"d":"M10.223 10C9.875 9.402 9.238 9 8.5 9C7.395 9 6.5 9.895 6.5 11L6.5 13C6.5 14.105 7.395 15 8.5 15C9.238 15 9.875 14.598 10.223 14"}),
          h('path', {"d":"M17.5 10C17.152 9.402 16.516 9 15.777 9C14.672 9 13.777 9.895 13.777 11L13.777 13C13.777 14.105 14.672 15 15.777 15C16.516 15 17.152 14.598 17.5 14"})
        ]
      );
  }
});

export default ClosedCaptionBarrel;
export { ClosedCaptionBarrel };
