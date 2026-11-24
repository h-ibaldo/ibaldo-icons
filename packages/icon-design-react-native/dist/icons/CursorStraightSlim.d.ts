import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CursorStraightSlimProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CursorStraightSlim: ForwardRefExoticComponent<CursorStraightSlimProps & RefAttributes<Svg>>;

export default CursorStraightSlim;
export { CursorStraightSlim };
