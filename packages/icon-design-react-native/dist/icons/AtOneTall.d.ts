import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface AtOneTallProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const AtOneTall: ForwardRefExoticComponent<AtOneTallProps & RefAttributes<Svg>>;

export default AtOneTall;
export { AtOneTall };
