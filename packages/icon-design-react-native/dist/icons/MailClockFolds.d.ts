import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface MailClockFoldsProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const MailClockFolds: ForwardRefExoticComponent<MailClockFoldsProps & RefAttributes<Svg>>;

export default MailClockFolds;
export { MailClockFolds };
