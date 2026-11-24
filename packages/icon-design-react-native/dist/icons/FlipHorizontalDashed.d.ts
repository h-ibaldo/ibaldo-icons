import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FlipHorizontalDashedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FlipHorizontalDashed: ForwardRefExoticComponent<FlipHorizontalDashedProps & RefAttributes<Svg>>;

export default FlipHorizontalDashed;
export { FlipHorizontalDashed };
