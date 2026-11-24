import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface NewspaperIsometricProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const NewspaperIsometric: ForwardRefExoticComponent<NewspaperIsometricProps & RefAttributes<Svg>>;

export default NewspaperIsometric;
export { NewspaperIsometric };
