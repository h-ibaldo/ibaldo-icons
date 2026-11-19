import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface MailSearchProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const MailSearch: ForwardRefExoticComponent<MailSearchProps & RefAttributes<Svg>>;

export default MailSearch;
export { MailSearch };
