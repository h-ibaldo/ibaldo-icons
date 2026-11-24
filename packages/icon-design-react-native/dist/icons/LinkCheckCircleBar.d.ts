import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LinkCheckCircleBarProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LinkCheckCircleBar: ForwardRefExoticComponent<LinkCheckCircleBarProps & RefAttributes<Svg>>;

export default LinkCheckCircleBar;
export { LinkCheckCircleBar };
