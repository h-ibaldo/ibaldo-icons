import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface MailStackSearchRoundedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const MailStackSearchRounded: ForwardRefExoticComponent<MailStackSearchRoundedProps & RefAttributes<Svg>>;

export default MailStackSearchRounded;
export { MailStackSearchRounded };
