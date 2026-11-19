import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ProgressBarSharpProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ProgressBarSharp: ForwardRefExoticComponent<ProgressBarSharpProps & RefAttributes<Svg>>;

export default ProgressBarSharp;
export { ProgressBarSharp };
