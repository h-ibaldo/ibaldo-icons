import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface MailLinkBracketProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const MailLinkBracket: ForwardRefExoticComponent<MailLinkBracketProps & RefAttributes<Svg>>;

export default MailLinkBracket;
export { MailLinkBracket };
