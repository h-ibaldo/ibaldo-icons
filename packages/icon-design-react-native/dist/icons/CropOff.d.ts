import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CropOffProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CropOff: ForwardRefExoticComponent<CropOffProps & RefAttributes<Svg>>;

export default CropOff;
export { CropOff };
