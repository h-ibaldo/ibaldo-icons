import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BugPlayProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BugPlay: ForwardRefExoticComponent<BugPlayProps & RefAttributes<Svg>>;

export default BugPlay;
export { BugPlay };
