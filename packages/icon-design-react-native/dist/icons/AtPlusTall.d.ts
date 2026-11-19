import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface AtPlusTallProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const AtPlusTall: ForwardRefExoticComponent<AtPlusTallProps & RefAttributes<Svg>>;

export default AtPlusTall;
export { AtPlusTall };
