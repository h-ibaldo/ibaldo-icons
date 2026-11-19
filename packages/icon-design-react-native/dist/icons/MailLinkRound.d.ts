import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface MailLinkRoundProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const MailLinkRound: ForwardRefExoticComponent<MailLinkRoundProps & RefAttributes<Svg>>;

export default MailLinkRound;
export { MailLinkRound };
