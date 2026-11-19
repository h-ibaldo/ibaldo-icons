import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface UploadSquareNotchProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const UploadSquareNotch: ForwardRefExoticComponent<UploadSquareNotchProps & RefAttributes<Svg>>;

export default UploadSquareNotch;
export { UploadSquareNotch };
