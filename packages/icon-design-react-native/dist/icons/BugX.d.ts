import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BugXProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BugX: ForwardRefExoticComponent<BugXProps & RefAttributes<Svg>>;

export default BugX;
export { BugX };
