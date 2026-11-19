import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface UploadFlatProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const UploadFlat: ForwardRefExoticComponent<UploadFlatProps & RefAttributes<Svg>>;

export default UploadFlat;
export { UploadFlat };
