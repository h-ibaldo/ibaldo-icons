import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface XTinyProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const XTiny: ForwardRefExoticComponent<XTinyProps & RefAttributes<Svg>>;

export default XTiny;
export { XTiny };
