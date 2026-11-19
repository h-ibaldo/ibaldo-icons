import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CursorStraightProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CursorStraight: ForwardRefExoticComponent<CursorStraightProps & RefAttributes<Svg>>;

export default CursorStraight;
export { CursorStraight };
