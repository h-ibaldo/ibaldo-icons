import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CursorCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CursorCircle: ForwardRefExoticComponent<CursorCircleProps & RefAttributes<Svg>>;

export default CursorCircle;
export { CursorCircle };
