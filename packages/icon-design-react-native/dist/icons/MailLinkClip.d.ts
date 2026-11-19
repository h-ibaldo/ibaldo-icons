import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface MailLinkClipProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const MailLinkClip: ForwardRefExoticComponent<MailLinkClipProps & RefAttributes<Svg>>;

export default MailLinkClip;
export { MailLinkClip };
