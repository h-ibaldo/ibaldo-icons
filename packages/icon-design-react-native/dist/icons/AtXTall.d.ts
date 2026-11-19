import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface AtXTallProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const AtXTall: ForwardRefExoticComponent<AtXTallProps & RefAttributes<Svg>>;

export default AtXTall;
export { AtXTall };
