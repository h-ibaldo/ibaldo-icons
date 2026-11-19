import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface UploadDottedFlatProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const UploadDottedFlat: ForwardRefExoticComponent<UploadDottedFlatProps & RefAttributes<Svg>>;

export default UploadDottedFlat;
export { UploadDottedFlat };
