import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface MailSearchRoundedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const MailSearchRounded: ForwardRefExoticComponent<MailSearchRoundedProps & RefAttributes<Svg>>;

export default MailSearchRounded;
export { MailSearchRounded };
