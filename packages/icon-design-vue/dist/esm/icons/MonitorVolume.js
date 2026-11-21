import { defineComponent, h } from 'vue';

const MonitorVolume = defineComponent({
  name: 'MonitorVolume',
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
          h('path', {"d":"M2 4L22 4L22 18L2 18Z"}),
          h('path', {"d":"M12 21L12 18"}),
          h('path', {"d":"M18 21L6 21"}),
          h('path', {"d":"M8 9L6 9L6 13L8 13L12 15L12 7Z"}),
          h('path', {"d":"M15 9.586C15.781 10.367 15.781 11.633 15 12.414"}),
          h('path', {"d":"M17.207 7.793C18.977 9.563 18.977 12.438 17.207 14.207"})
        ]
      );
  }
});

export default MonitorVolume;
export { MonitorVolume };
