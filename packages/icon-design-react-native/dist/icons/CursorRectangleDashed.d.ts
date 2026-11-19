import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CursorRectangleDashedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CursorRectangleDashed: ForwardRefExoticComponent<CursorRectangleDashedProps & RefAttributes<Svg>>;

export default CursorRectangleDashed;
export { CursorRectangleDashed };
