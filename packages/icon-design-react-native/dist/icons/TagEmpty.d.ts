import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TagEmptyProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TagEmpty: ForwardRefExoticComponent<TagEmptyProps & RefAttributes<Svg>>;

export default TagEmpty;
export { TagEmpty };
