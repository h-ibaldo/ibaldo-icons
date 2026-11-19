import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface DotsDiamondProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const DotsDiamond: ForwardRefExoticComponent<DotsDiamondProps & RefAttributes<Svg>>;

export default DotsDiamond;
export { DotsDiamond };
