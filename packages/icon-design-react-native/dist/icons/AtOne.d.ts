import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface AtOneProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const AtOne: ForwardRefExoticComponent<AtOneProps & RefAttributes<Svg>>;

export default AtOne;
export { AtOne };
