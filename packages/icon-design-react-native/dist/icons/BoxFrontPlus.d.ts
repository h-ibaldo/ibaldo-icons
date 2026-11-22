import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BoxFrontPlusProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BoxFrontPlus: ForwardRefExoticComponent<BoxFrontPlusProps & RefAttributes<Svg>>;

export default BoxFrontPlus;
export { BoxFrontPlus };
