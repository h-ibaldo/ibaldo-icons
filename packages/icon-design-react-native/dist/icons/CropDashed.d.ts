import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CropDashedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CropDashed: ForwardRefExoticComponent<CropDashedProps & RefAttributes<Svg>>;

export default CropDashed;
export { CropDashed };
