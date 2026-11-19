import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface AtMinusProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const AtMinus: ForwardRefExoticComponent<AtMinusProps & RefAttributes<Svg>>;

export default AtMinus;
export { AtMinus };
