import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface MailDotRoundedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const MailDotRounded: ForwardRefExoticComponent<MailDotRoundedProps & RefAttributes<Svg>>;

export default MailDotRounded;
export { MailDotRounded };
