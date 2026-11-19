import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface XOctagonProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const XOctagon: ForwardRefExoticComponent<XOctagonProps & RefAttributes<Svg>>;

export default XOctagon;
export { XOctagon };
