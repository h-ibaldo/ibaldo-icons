import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CropArrowBendProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CropArrowBend: ForwardRefExoticComponent<CropArrowBendProps & RefAttributes<Svg>>;

export default CropArrowBend;
export { CropArrowBend };
