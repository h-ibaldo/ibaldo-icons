import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface WandPlusThreeProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const WandPlusThree: ForwardRefExoticComponent<WandPlusThreeProps & RefAttributes<Svg>>;

export default WandPlusThree;
export { WandPlusThree };
