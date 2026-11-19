import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CornersSquareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CornersSquare: ForwardRefExoticComponent<CornersSquareProps & RefAttributes<Svg>>;

export default CornersSquare;
export { CornersSquare };
