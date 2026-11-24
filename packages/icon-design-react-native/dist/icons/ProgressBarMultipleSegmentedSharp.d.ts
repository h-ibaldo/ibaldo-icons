import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ProgressBarMultipleSegmentedSharpProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ProgressBarMultipleSegmentedSharp: ForwardRefExoticComponent<ProgressBarMultipleSegmentedSharpProps & RefAttributes<Svg>>;

export default ProgressBarMultipleSegmentedSharp;
export { ProgressBarMultipleSegmentedSharp };
