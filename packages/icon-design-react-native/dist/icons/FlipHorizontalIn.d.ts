import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FlipHorizontalInProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FlipHorizontalIn: ForwardRefExoticComponent<FlipHorizontalInProps & RefAttributes<Svg>>;

export default FlipHorizontalIn;
export { FlipHorizontalIn };
