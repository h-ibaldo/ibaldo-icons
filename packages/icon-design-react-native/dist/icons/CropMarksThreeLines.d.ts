import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CropMarksThreeLinesProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CropMarksThreeLines: ForwardRefExoticComponent<CropMarksThreeLinesProps & RefAttributes<Svg>>;

export default CropMarksThreeLines;
export { CropMarksThreeLines };
