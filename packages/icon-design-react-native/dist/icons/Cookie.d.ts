import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CookieProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const Cookie: ForwardRefExoticComponent<CookieProps & RefAttributes<Svg>>;

export default Cookie;
export { Cookie };
