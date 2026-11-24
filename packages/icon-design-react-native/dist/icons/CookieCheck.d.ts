import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CookieCheckProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CookieCheck: ForwardRefExoticComponent<CookieCheckProps & RefAttributes<Svg>>;

export default CookieCheck;
export { CookieCheck };
