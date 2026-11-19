import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LinkBrokenBurstSquareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LinkBrokenBurstSquare: ForwardRefExoticComponent<LinkBrokenBurstSquareProps & RefAttributes<Svg>>;

export default LinkBrokenBurstSquare;
export { LinkBrokenBurstSquare };
