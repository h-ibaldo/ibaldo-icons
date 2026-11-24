import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CrownJewelProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CrownJewel: ForwardRefExoticComponent<CrownJewelProps & RefAttributes<Svg>>;

export default CrownJewel;
export { CrownJewel };
