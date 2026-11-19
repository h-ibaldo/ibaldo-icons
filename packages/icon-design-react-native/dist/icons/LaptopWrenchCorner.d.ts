import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LaptopWrenchCornerProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LaptopWrenchCorner: ForwardRefExoticComponent<LaptopWrenchCornerProps & RefAttributes<Svg>>;

export default LaptopWrenchCorner;
export { LaptopWrenchCorner };
