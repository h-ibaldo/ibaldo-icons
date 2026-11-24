import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface MailMinusProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const MailMinus: ForwardRefExoticComponent<MailMinusProps & RefAttributes<Svg>>;

export default MailMinus;
export { MailMinus };
