import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CookieXProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CookieX: ForwardRefExoticComponent<CookieXProps & RefAttributes<Svg>>;

export default CookieX;
export { CookieX };
