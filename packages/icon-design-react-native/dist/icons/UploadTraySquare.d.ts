import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface UploadTraySquareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const UploadTraySquare: ForwardRefExoticComponent<UploadTraySquareProps & RefAttributes<Svg>>;

export default UploadTraySquare;
export { UploadTraySquare };
