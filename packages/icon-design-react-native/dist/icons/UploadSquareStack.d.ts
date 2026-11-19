import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface UploadSquareStackProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const UploadSquareStack: ForwardRefExoticComponent<UploadSquareStackProps & RefAttributes<Svg>>;

export default UploadSquareStack;
export { UploadSquareStack };
