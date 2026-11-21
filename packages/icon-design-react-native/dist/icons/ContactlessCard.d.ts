import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ContactlessCardProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ContactlessCard: ForwardRefExoticComponent<ContactlessCardProps & RefAttributes<Svg>>;

export default ContactlessCard;
export { ContactlessCard };
