import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface JustifyRightFlippedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const JustifyRightFlipped: ForwardRefExoticComponent<JustifyRightFlippedProps & RefAttributes<Svg>>;

export default JustifyRightFlipped;
export { JustifyRightFlipped };
