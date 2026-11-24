import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface AtBoxyProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const AtBoxy: ForwardRefExoticComponent<AtBoxyProps & RefAttributes<Svg>>;

export default AtBoxy;
export { AtBoxy };
