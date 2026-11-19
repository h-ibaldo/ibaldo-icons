import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface MailOpenUploadProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const MailOpenUpload: ForwardRefExoticComponent<MailOpenUploadProps & RefAttributes<Svg>>;

export default MailOpenUpload;
export { MailOpenUpload };
