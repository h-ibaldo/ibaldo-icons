import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface NewspaperProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const Newspaper: ForwardRefExoticComponent<NewspaperProps & RefAttributes<Svg>>;

export default Newspaper;
export { Newspaper };
