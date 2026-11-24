import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LinkCircleXShortProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LinkCircleXShort: ForwardRefExoticComponent<LinkCircleXShortProps & RefAttributes<Svg>>;

export default LinkCircleXShort;
export { LinkCircleXShort };
