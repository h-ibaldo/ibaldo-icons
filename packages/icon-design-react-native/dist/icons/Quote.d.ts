import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface QuoteProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const Quote: ForwardRefExoticComponent<QuoteProps & RefAttributes<Svg>>;

export default Quote;
export { Quote };
