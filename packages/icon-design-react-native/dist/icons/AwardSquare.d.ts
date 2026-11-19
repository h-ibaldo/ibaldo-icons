import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface AwardSquareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const AwardSquare: ForwardRefExoticComponent<AwardSquareProps & RefAttributes<Svg>>;

export default AwardSquare;
export { AwardSquare };
