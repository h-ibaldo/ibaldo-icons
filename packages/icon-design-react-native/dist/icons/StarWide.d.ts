import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface StarWideProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const StarWide: ForwardRefExoticComponent<StarWideProps & RefAttributes<Svg>>;

export default StarWide;
export { StarWide };
