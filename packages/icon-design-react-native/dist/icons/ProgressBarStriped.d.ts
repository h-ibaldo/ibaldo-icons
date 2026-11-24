import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ProgressBarStripedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ProgressBarStriped: ForwardRefExoticComponent<ProgressBarStripedProps & RefAttributes<Svg>>;

export default ProgressBarStriped;
export { ProgressBarStriped };
