import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LaptopBagCenterFlatProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LaptopBagCenterFlat: ForwardRefExoticComponent<LaptopBagCenterFlatProps & RefAttributes<Svg>>;

export default LaptopBagCenterFlat;
export { LaptopBagCenterFlat };
