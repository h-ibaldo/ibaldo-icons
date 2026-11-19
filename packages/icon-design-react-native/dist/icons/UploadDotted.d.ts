import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface UploadDottedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const UploadDotted: ForwardRefExoticComponent<UploadDottedProps & RefAttributes<Svg>>;

export default UploadDotted;
export { UploadDotted };
