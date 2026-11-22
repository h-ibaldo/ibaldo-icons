import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FlipVerticalDashedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FlipVerticalDashed: ForwardRefExoticComponent<FlipVerticalDashedProps & RefAttributes<Svg>>;

export default FlipVerticalDashed;
export { FlipVerticalDashed };
