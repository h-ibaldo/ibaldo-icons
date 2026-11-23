import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface MailEditProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const MailEdit: ForwardRefExoticComponent<MailEditProps & RefAttributes<Svg>>;

export default MailEdit;
export { MailEdit };
