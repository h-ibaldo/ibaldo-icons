import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CrosshairDotProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CrosshairDot: ForwardRefExoticComponent<CrosshairDotProps & RefAttributes<Svg>>;

export default CrosshairDot;
export { CrosshairDot };
