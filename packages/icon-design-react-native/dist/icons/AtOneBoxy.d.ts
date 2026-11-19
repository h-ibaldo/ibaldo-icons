import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface AtOneBoxyProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const AtOneBoxy: ForwardRefExoticComponent<AtOneBoxyProps & RefAttributes<Svg>>;

export default AtOneBoxy;
export { AtOneBoxy };
