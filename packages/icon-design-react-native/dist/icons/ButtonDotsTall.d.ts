import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ButtonDotsTallProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ButtonDotsTall: ForwardRefExoticComponent<ButtonDotsTallProps & RefAttributes<Svg>>;

export default ButtonDotsTall;
export { ButtonDotsTall };
