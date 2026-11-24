import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FlipVerticalProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FlipVertical: ForwardRefExoticComponent<FlipVerticalProps & RefAttributes<Svg>>;

export default FlipVertical;
export { FlipVertical };
