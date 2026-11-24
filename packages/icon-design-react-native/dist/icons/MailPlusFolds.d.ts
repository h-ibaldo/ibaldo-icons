import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface MailPlusFoldsProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const MailPlusFolds: ForwardRefExoticComponent<MailPlusFoldsProps & RefAttributes<Svg>>;

export default MailPlusFolds;
export { MailPlusFolds };
