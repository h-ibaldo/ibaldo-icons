import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TagPercentProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TagPercent: ForwardRefExoticComponent<TagPercentProps & RefAttributes<Svg>>;

export default TagPercent;
export { TagPercent };
