import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ProgressBarStripedSharpProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ProgressBarStripedSharp: ForwardRefExoticComponent<ProgressBarStripedSharpProps & RefAttributes<Svg>>;

export default ProgressBarStripedSharp;
export { ProgressBarStripedSharp };
