import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BinocularsWideProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BinocularsWide: ForwardRefExoticComponent<BinocularsWideProps & RefAttributes<Svg>>;

export default BinocularsWide;
export { BinocularsWide };
