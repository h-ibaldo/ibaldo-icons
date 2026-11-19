import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface XSquareCompactProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const XSquareCompact: ForwardRefExoticComponent<XSquareCompactProps & RefAttributes<Svg>>;

export default XSquareCompact;
export { XSquareCompact };
