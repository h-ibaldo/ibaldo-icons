import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CursorStraight2Props extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CursorStraight2: ForwardRefExoticComponent<CursorStraight2Props & RefAttributes<Svg>>;

export default CursorStraight2;
export { CursorStraight2 };
