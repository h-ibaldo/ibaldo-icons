import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FlipHorizontalProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FlipHorizontal: ForwardRefExoticComponent<FlipHorizontalProps & RefAttributes<Svg>>;

export default FlipHorizontal;
export { FlipHorizontal };
