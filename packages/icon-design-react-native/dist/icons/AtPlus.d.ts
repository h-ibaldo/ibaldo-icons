import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface AtPlusProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const AtPlus: ForwardRefExoticComponent<AtPlusProps & RefAttributes<Svg>>;

export default AtPlus;
export { AtPlus };
