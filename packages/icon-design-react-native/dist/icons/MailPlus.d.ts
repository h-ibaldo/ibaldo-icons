import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface MailPlusProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const MailPlus: ForwardRefExoticComponent<MailPlusProps & RefAttributes<Svg>>;

export default MailPlus;
export { MailPlus };
