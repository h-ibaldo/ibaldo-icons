import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PencilPlusThreeProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PencilPlusThree: ForwardRefExoticComponent<PencilPlusThreeProps & RefAttributes<Svg>>;

export default PencilPlusThree;
export { PencilPlusThree };
