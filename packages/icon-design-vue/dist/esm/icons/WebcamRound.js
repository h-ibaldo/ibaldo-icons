import { defineComponent, h } from 'vue';

const WebcamRound = defineComponent({
  name: 'WebcamRound',
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
          h('path', {"d":"M4 10C4 5.582 7.582 2 12 2C16.418 2 20 5.582 20 10C20 14.418 16.418 18 12 18C7.582 18 4 14.418 4 10Z"}),
          h('path', {"d":"M16.57 16.566L19.855 19.855C20.383 20.383 20.172 21.277 19.465 21.512L19.266 21.578C18.445 21.852 17.555 21.852 16.734 21.578C13.66 20.555 10.34 20.555 7.266 21.578C6.445 21.852 5.555 21.852 4.734 21.578L4.535 21.512C3.828 21.277 3.617 20.383 4.145 19.855L7.43 16.566"}),
          h('path', {"d":"M7.621 10.082C7.621 7.598 9.633 5.582 12.121 5.582C14.605 5.582 16.621 7.598 16.621 10.082C16.621 12.566 14.605 14.582 12.121 14.582C9.633 14.582 7.621 12.566 7.621 10.082Z"}),
          h('path', {"d":"M10.121 10.082C10.121 8.977 11.016 8.082 12.121 8.082"})
        ]
      );
  }
});

export default WebcamRound;
export { WebcamRound };
