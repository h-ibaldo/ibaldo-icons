import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface MailDotProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const MailDot: ForwardRefExoticComponent<MailDotProps & RefAttributes<Svg>>;

export default MailDot;
export { MailDot };
