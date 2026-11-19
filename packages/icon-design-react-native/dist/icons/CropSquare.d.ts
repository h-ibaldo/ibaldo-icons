import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CropSquareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CropSquare: ForwardRefExoticComponent<CropSquareProps & RefAttributes<Svg>>;

export default CropSquare;
export { CropSquare };
