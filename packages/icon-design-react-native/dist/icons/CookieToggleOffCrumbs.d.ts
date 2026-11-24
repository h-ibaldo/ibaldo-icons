import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CookieToggleOffCrumbsProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CookieToggleOffCrumbs: ForwardRefExoticComponent<CookieToggleOffCrumbsProps & RefAttributes<Svg>>;

export default CookieToggleOffCrumbs;
export { CookieToggleOffCrumbs };
