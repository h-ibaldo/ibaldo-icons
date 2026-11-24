import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface MailMinusFoldsProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const MailMinusFolds: ForwardRefExoticComponent<MailMinusFoldsProps & RefAttributes<Svg>>;

export default MailMinusFolds;
export { MailMinusFolds };
