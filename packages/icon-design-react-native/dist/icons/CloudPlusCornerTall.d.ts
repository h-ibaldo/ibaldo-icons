import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CloudPlusCornerTallProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CloudPlusCornerTall: ForwardRefExoticComponent<CloudPlusCornerTallProps & RefAttributes<Svg>>;

export default CloudPlusCornerTall;
export { CloudPlusCornerTall };
