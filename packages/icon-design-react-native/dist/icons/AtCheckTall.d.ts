import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface AtCheckTallProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const AtCheckTall: ForwardRefExoticComponent<AtCheckTallProps & RefAttributes<Svg>>;

export default AtCheckTall;
export { AtCheckTall };
