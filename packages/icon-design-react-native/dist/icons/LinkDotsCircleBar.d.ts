import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LinkDotsCircleBarProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LinkDotsCircleBar: ForwardRefExoticComponent<LinkDotsCircleBarProps & RefAttributes<Svg>>;

export default LinkDotsCircleBar;
export { LinkDotsCircleBar };
