import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface AtTallProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const AtTall: ForwardRefExoticComponent<AtTallProps & RefAttributes<Svg>>;

export default AtTall;
export { AtTall };
