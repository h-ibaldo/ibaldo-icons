import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CropMarksTwoLinesProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CropMarksTwoLines: ForwardRefExoticComponent<CropMarksTwoLinesProps & RefAttributes<Svg>>;

export default CropMarksTwoLines;
export { CropMarksTwoLines };
