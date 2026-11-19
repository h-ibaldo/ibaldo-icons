import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TextAdsMobileProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TextAdsMobile: ForwardRefExoticComponent<TextAdsMobileProps & RefAttributes<Svg>>;

export default TextAdsMobile;
export { TextAdsMobile };
