import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface AtPlusCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const AtPlusCircle: ForwardRefExoticComponent<AtPlusCircleProps & RefAttributes<Svg>>;

export default AtPlusCircle;
export { AtPlusCircle };
