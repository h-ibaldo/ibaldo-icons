import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CookieSettingsCrumbsProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CookieSettingsCrumbs: ForwardRefExoticComponent<CookieSettingsCrumbsProps & RefAttributes<Svg>>;

export default CookieSettingsCrumbs;
export { CookieSettingsCrumbs };
