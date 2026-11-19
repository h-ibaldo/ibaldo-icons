import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CookieToggleOnCrumbsProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CookieToggleOnCrumbs: ForwardRefExoticComponent<CookieToggleOnCrumbsProps & RefAttributes<Svg>>;

export default CookieToggleOnCrumbs;
export { CookieToggleOnCrumbs };
