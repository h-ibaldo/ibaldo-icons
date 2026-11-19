import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FaqProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const Faq: ForwardRefExoticComponent<FaqProps & RefAttributes<Svg>>;

export default Faq;
export { Faq };
