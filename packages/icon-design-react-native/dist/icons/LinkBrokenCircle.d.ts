import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LinkBrokenCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LinkBrokenCircle: ForwardRefExoticComponent<LinkBrokenCircleProps & RefAttributes<Svg>>;

export default LinkBrokenCircle;
export { LinkBrokenCircle };
