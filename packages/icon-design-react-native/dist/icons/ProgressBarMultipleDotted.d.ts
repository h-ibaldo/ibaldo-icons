import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ProgressBarMultipleDottedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ProgressBarMultipleDotted: ForwardRefExoticComponent<ProgressBarMultipleDottedProps & RefAttributes<Svg>>;

export default ProgressBarMultipleDotted;
export { ProgressBarMultipleDotted };
