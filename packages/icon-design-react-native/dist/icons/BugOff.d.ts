import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BugOffProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BugOff: ForwardRefExoticComponent<BugOffProps & RefAttributes<Svg>>;

export default BugOff;
export { BugOff };
