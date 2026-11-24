import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface MailOpenUpload2Props extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const MailOpenUpload2: ForwardRefExoticComponent<MailOpenUpload2Props & RefAttributes<Svg>>;

export default MailOpenUpload2;
export { MailOpenUpload2 };
