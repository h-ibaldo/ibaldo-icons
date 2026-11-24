import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface NewspaperTornProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const NewspaperTorn: ForwardRefExoticComponent<NewspaperTornProps & RefAttributes<Svg>>;

export default NewspaperTorn;
export { NewspaperTorn };
