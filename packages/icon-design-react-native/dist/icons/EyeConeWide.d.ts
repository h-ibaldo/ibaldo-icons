import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface EyeConeWideProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const EyeConeWide: ForwardRefExoticComponent<EyeConeWideProps & RefAttributes<Svg>>;

export default EyeConeWide;
export { EyeConeWide };
