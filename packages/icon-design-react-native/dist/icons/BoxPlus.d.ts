import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BoxPlusProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BoxPlus: ForwardRefExoticComponent<BoxPlusProps & RefAttributes<Svg>>;

export default BoxPlus;
export { BoxPlus };
