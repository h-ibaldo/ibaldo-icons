import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PollPercentProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PollPercent: ForwardRefExoticComponent<PollPercentProps & RefAttributes<Svg>>;

export default PollPercent;
export { PollPercent };
