import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BroomPlusThreeProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BroomPlusThree: ForwardRefExoticComponent<BroomPlusThreeProps & RefAttributes<Svg>>;

export default BroomPlusThree;
export { BroomPlusThree };
