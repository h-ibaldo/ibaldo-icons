import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface AtDotsTallProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const AtDotsTall: ForwardRefExoticComponent<AtDotsTallProps & RefAttributes<Svg>>;

export default AtDotsTall;
export { AtDotsTall };
