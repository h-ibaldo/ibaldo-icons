import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ShareSquareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ShareSquare: ForwardRefExoticComponent<ShareSquareProps & RefAttributes<Svg>>;

export default ShareSquare;
export { ShareSquare };
