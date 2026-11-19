import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LinkCircleShortProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LinkCircleShort: ForwardRefExoticComponent<LinkCircleShortProps & RefAttributes<Svg>>;

export default LinkCircleShort;
export { LinkCircleShort };
