import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface MailStackSearchProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const MailStackSearch: ForwardRefExoticComponent<MailStackSearchProps & RefAttributes<Svg>>;

export default MailStackSearch;
export { MailStackSearch };
