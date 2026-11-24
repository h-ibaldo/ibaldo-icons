import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ProgressBarDottedSharpProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ProgressBarDottedSharp: ForwardRefExoticComponent<ProgressBarDottedSharpProps & RefAttributes<Svg>>;

export default ProgressBarDottedSharp;
export { ProgressBarDottedSharp };
