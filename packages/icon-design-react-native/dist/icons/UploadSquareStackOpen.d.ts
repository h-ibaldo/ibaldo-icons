import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface UploadSquareStackOpenProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const UploadSquareStackOpen: ForwardRefExoticComponent<UploadSquareStackOpenProps & RefAttributes<Svg>>;

export default UploadSquareStackOpen;
export { UploadSquareStackOpen };
