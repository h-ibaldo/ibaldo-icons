import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface AtCheckBoxyProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const AtCheckBoxy: ForwardRefExoticComponent<AtCheckBoxyProps & RefAttributes<Svg>>;

export default AtCheckBoxy;
export { AtCheckBoxy };
