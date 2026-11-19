import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PollHorizontalPercentProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PollHorizontalPercent: ForwardRefExoticComponent<PollHorizontalPercentProps & RefAttributes<Svg>>;

export default PollHorizontalPercent;
export { PollHorizontalPercent };
