import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TagStackProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TagStack: ForwardRefExoticComponent<TagStackProps & RefAttributes<Svg>>;

export default TagStack;
export { TagStack };
