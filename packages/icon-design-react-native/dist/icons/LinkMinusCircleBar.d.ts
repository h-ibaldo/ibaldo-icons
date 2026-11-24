import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LinkMinusCircleBarProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LinkMinusCircleBar: ForwardRefExoticComponent<LinkMinusCircleBarProps & RefAttributes<Svg>>;

export default LinkMinusCircleBar;
export { LinkMinusCircleBar };
