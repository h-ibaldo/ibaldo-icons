import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface UploadSquareOpenProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const UploadSquareOpen: ForwardRefExoticComponent<UploadSquareOpenProps & RefAttributes<Svg>>;

export default UploadSquareOpen;
export { UploadSquareOpen };
