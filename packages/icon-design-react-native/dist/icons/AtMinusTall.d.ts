import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface AtMinusTallProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const AtMinusTall: ForwardRefExoticComponent<AtMinusTallProps & RefAttributes<Svg>>;

export default AtMinusTall;
export { AtMinusTall };
