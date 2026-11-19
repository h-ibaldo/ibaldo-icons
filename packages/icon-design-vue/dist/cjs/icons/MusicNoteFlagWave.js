'use strict';

const { defineComponent, h } = require('vue');

const MusicNoteFlagWave = defineComponent({
  name: 'MusicNoteFlagWave',
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
          h('ellipse', {"cx":"7","cy":"18.499999999998181","rx":"4","ry":"3.5"}),
          h('path', {"d":"M11,6.999999999998181h2.197226165038956c1.175499458480772,0,2.324697664540508.347949219720249,3.302772334960537.999998999999661l.000003000001016.000002000000677c.978074670418209.652049780279413,2.127272876479765.999998999999661,3.302772334960537.999998999999661h2.197226165038956V3.999999999998181h-2.197226165038956c-1.175499458480772,0-2.324697664542327-.347949219720249-3.302772334960537-.999998999999661l-.000003000001016-.000002000000677c-.978074670420028-.652049780279413-2.127272876479765-.999998999999661-3.302772334949623-.999998999999661h-2.197226165049869v16"})
        ]
      );
  }
});

module.exports = MusicNoteFlagWave;
module.exports.MusicNoteFlagWave = MusicNoteFlagWave;
module.exports.default = MusicNoteFlagWave;
