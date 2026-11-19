import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface MailOpenUploadWideProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const MailOpenUploadWide: ForwardRefExoticComponent<MailOpenUploadWideProps & RefAttributes<Svg>>;

export default MailOpenUploadWide;
export { MailOpenUploadWide };
