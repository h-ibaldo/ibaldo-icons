import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ProgressBarMultipleStripedJoinedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ProgressBarMultipleStripedJoined: ForwardRefExoticComponent<ProgressBarMultipleStripedJoinedProps & RefAttributes<Svg>>;

export default ProgressBarMultipleStripedJoined;
export { ProgressBarMultipleStripedJoined };
