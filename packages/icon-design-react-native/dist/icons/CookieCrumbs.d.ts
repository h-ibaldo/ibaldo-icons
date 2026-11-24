import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CookieCrumbsProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CookieCrumbs: ForwardRefExoticComponent<CookieCrumbsProps & RefAttributes<Svg>>;

export default CookieCrumbs;
export { CookieCrumbs };
