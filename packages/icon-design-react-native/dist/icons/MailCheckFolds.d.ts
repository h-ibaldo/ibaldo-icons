import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface MailCheckFoldsProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const MailCheckFolds: ForwardRefExoticComponent<MailCheckFoldsProps & RefAttributes<Svg>>;

export default MailCheckFolds;
export { MailCheckFolds };
