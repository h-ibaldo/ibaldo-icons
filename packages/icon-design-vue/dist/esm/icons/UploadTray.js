import { defineComponent, h } from 'vue';

const UploadTray = defineComponent({
  name: 'UploadTray',
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
          h('polyline', {"points":"14.974731452750348 6.000000027964234 11.974731465619698 3.000000000459295 8.974731452750348 6.000000027423084"}),
          h('line', {"x1":"11.974731464810247","y1":"12.000000027693204","x2":"11.974731465619698","y2":"3.000000000459295"}),
          h('path', {"d":"M21.941894535959364,15.000000000459295h-5.967163085928405c-.552307128911707,0-1,.447692871094659-1,1,0,.55224609375-.447692871101026,1-1,1h-4c-.552307128911707,0-1-.44775390625-1-1,0-.552307128905341-.447692871101026-1-1-1H2.007568364089821"}),
          h('path', {"d":"M4.674743657049476,6.000000000459295l-2.573486328119543,8.578247070309772c-.083923339840112.279663085940228-.126525878898974.570068359375-.126525878898974.862060546875v3.559692382815228c0,1.104553222657159.895446777338293,2,2,2h16c1.104553222648974,0,2-.895446777342841,2-2v-3.559692382815228c0-.2919921875-.042602539071595-.582397460934772-.126525878911707-.862060546875l-2.573486328128638-8.578247070309772"})
        ]
      );
  }
});

export default UploadTray;
export { UploadTray };
