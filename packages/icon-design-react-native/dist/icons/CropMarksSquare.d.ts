import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CropMarksSquareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CropMarksSquare: ForwardRefExoticComponent<CropMarksSquareProps & RefAttributes<Svg>>;

export default CropMarksSquare;
export { CropMarksSquare };
