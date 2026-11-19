import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BorderLeftProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BorderLeft: ForwardRefExoticComponent<BorderLeftProps & RefAttributes<Svg>>;

export default BorderLeft;
export { BorderLeft };
