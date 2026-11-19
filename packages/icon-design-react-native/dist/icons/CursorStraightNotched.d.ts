import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CursorStraightNotchedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CursorStraightNotched: ForwardRefExoticComponent<CursorStraightNotchedProps & RefAttributes<Svg>>;

export default CursorStraightNotched;
export { CursorStraightNotched };
