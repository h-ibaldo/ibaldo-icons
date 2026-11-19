import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ProgressDotsProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ProgressDots: ForwardRefExoticComponent<ProgressDotsProps & RefAttributes<Svg>>;

export default ProgressDots;
export { ProgressDots };
