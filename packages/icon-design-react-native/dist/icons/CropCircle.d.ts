import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CropCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CropCircle: ForwardRefExoticComponent<CropCircleProps & RefAttributes<Svg>>;

export default CropCircle;
export { CropCircle };
