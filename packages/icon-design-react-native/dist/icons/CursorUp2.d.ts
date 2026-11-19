import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CursorUp2Props extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CursorUp2: ForwardRefExoticComponent<CursorUp2Props & RefAttributes<Svg>>;

export default CursorUp2;
export { CursorUp2 };
