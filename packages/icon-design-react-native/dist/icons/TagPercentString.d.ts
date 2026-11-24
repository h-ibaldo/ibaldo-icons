import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TagPercentStringProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TagPercentString: ForwardRefExoticComponent<TagPercentStringProps & RefAttributes<Svg>>;

export default TagPercentString;
export { TagPercentString };
