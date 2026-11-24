import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CursorUpProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CursorUp: ForwardRefExoticComponent<CursorUpProps & RefAttributes<Svg>>;

export default CursorUp;
export { CursorUp };
