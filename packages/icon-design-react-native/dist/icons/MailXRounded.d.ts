import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface MailXRoundedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const MailXRounded: ForwardRefExoticComponent<MailXRoundedProps & RefAttributes<Svg>>;

export default MailXRounded;
export { MailXRounded };
