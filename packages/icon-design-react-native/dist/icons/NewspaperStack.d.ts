import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface NewspaperStackProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const NewspaperStack: ForwardRefExoticComponent<NewspaperStackProps & RefAttributes<Svg>>;

export default NewspaperStack;
export { NewspaperStack };
