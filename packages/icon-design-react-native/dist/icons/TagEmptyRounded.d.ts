import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TagEmptyRoundedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TagEmptyRounded: ForwardRefExoticComponent<TagEmptyRoundedProps & RefAttributes<Svg>>;

export default TagEmptyRounded;
export { TagEmptyRounded };
