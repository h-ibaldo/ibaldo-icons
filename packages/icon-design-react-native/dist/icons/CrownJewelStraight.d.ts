import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CrownJewelStraightProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CrownJewelStraight: ForwardRefExoticComponent<CrownJewelStraightProps & RefAttributes<Svg>>;

export default CrownJewelStraight;
export { CrownJewelStraight };
