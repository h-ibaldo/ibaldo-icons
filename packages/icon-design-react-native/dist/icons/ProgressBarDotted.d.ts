import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ProgressBarDottedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ProgressBarDotted: ForwardRefExoticComponent<ProgressBarDottedProps & RefAttributes<Svg>>;

export default ProgressBarDotted;
export { ProgressBarDotted };
