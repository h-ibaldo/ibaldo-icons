'use strict';

const { defineComponent, h } = require('vue');

const FileSettingsCut = defineComponent({
  name: 'FileSettingsCut',
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
          h('path', {"d":"M19.5 17C19.5 18.933 17.933 20.5 16 20.5C14.067 20.5 12.5 18.933 12.5 17C12.5 15.067 14.067 13.5 16 13.5C17.933 13.5 19.5 15.067 19.5 17Z"}),
          h('path', {"d":"M16 17L16 17"}),
          h('path', {"d":"M16 12L16 13.5"}),
          h('path', {"d":"M16 20.5L16 22"}),
          h('path', {"d":"M21 17L19.5 17"}),
          h('path', {"d":"M12.5 17L11 17"}),
          h('path', {"d":"M19.536 20.536L18.475 19.475"}),
          h('path', {"d":"M13.525 14.525L12.464 13.464"}),
          h('path', {"d":"M12.464 20.536L13.525 19.475"}),
          h('path', {"d":"M18.475 14.525L19.536 13.464"}),
          h('path', {"d":"M20 10L20 7.828C20 7.298 19.789 6.789 19.414 6.414L15.586 2.586C15.211 2.211 14.702 2 14.172 2L6 2C4.895 2 4 2.895 4 4L4 20C4 21.105 4.895 22 6 22L9 22"})
        ]
      );
  }
});

module.exports = FileSettingsCut;
module.exports.FileSettingsCut = FileSettingsCut;
module.exports.default = FileSettingsCut;
