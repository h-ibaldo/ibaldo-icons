import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PollHorizontalCheckXProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PollHorizontalCheckX: ForwardRefExoticComponent<PollHorizontalCheckXProps & RefAttributes<Svg>>;

export default PollHorizontalCheckX;
export { PollHorizontalCheckX };
