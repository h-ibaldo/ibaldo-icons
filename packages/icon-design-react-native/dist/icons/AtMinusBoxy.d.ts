import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface AtMinusBoxyProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const AtMinusBoxy: ForwardRefExoticComponent<AtMinusBoxyProps & RefAttributes<Svg>>;

export default AtMinusBoxy;
export { AtMinusBoxy };
