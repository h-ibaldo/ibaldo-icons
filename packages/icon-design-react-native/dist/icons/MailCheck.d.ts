import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface MailCheckProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const MailCheck: ForwardRefExoticComponent<MailCheckProps & RefAttributes<Svg>>;

export default MailCheck;
export { MailCheck };
