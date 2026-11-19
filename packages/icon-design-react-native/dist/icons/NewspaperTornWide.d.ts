import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface NewspaperTornWideProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const NewspaperTornWide: ForwardRefExoticComponent<NewspaperTornWideProps & RefAttributes<Svg>>;

export default NewspaperTornWide;
export { NewspaperTornWide };
