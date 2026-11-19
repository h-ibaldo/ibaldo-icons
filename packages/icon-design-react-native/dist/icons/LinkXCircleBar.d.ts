import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LinkXCircleBarProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LinkXCircleBar: ForwardRefExoticComponent<LinkXCircleBarProps & RefAttributes<Svg>>;

export default LinkXCircleBar;
export { LinkXCircleBar };
