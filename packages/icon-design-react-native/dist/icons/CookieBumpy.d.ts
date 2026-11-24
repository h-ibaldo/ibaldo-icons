import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CookieBumpyProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CookieBumpy: ForwardRefExoticComponent<CookieBumpyProps & RefAttributes<Svg>>;

export default CookieBumpy;
export { CookieBumpy };
