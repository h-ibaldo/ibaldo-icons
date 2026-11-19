import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CursorUpRightCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CursorUpRightCircle: ForwardRefExoticComponent<CursorUpRightCircleProps & RefAttributes<Svg>>;

export default CursorUpRightCircle;
export { CursorUpRightCircle };
