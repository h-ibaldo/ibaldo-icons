import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TabletMobileProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TabletMobile: ForwardRefExoticComponent<TabletMobileProps & RefAttributes<Svg>>;

export default TabletMobile;
export { TabletMobile };
