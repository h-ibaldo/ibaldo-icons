import { defineComponent, h } from 'vue';

const MonitorSettings = defineComponent({
  name: 'MonitorSettings',
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
          h('path', {"d":"M22 14L22 18L2 18L2 4L9 4"}),
          h('path', {"d":"M12 21L12 18"}),
          h('path', {"d":"M18 21L6 21"}),
          h('path', {"d":"M19.852 7.387C19.852 9.32 18.285 10.887 16.352 10.887C14.418 10.887 12.852 9.32 12.852 7.387C12.852 5.453 14.418 3.887 16.352 3.887C18.285 3.887 19.852 5.453 19.852 7.387Z"}),
          h('path', {"d":"M16.352 7.398L16.352 7.387"}),
          h('path', {"d":"M16.352 2.387L16.352 3.887"}),
          h('path', {"d":"M16.352 10.887L16.352 12.387"}),
          h('path', {"d":"M21.352 7.387L19.852 7.387"}),
          h('path', {"d":"M12.852 7.387L11.352 7.387"}),
          h('path', {"d":"M19.887 10.922L18.824 9.863"}),
          h('path', {"d":"M13.875 4.914L12.816 3.852"}),
          h('path', {"d":"M12.816 10.922L13.875 9.863"}),
          h('path', {"d":"M18.824 4.914L19.887 3.852"})
        ]
      );
  }
});

export default MonitorSettings;
export { MonitorSettings };
