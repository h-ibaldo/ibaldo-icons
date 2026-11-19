import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BrowserUploadProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BrowserUpload: ForwardRefExoticComponent<BrowserUploadProps & RefAttributes<Svg>>;

export default BrowserUpload;
export { BrowserUpload };
