import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ContactlessProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const Contactless: ForwardRefExoticComponent<ContactlessProps & RefAttributes<Svg>>;

export default Contactless;
export { Contactless };
