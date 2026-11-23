import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface MailEditFoldsProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const MailEditFolds: ForwardRefExoticComponent<MailEditFoldsProps & RefAttributes<Svg>>;

export default MailEditFolds;
export { MailEditFolds };
