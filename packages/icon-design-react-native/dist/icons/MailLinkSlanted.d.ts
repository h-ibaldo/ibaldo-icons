import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface MailLinkSlantedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const MailLinkSlanted: ForwardRefExoticComponent<MailLinkSlantedProps & RefAttributes<Svg>>;

export default MailLinkSlanted;
export { MailLinkSlanted };
