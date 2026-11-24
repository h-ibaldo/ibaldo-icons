import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FlipHorizontalInDashedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FlipHorizontalInDashed: ForwardRefExoticComponent<FlipHorizontalInDashedProps & RefAttributes<Svg>>;

export default FlipHorizontalInDashed;
export { FlipHorizontalInDashed };
