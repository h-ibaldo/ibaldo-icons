import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SupportOvalMicProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SupportOvalMic: ForwardRefExoticComponent<SupportOvalMicProps & RefAttributes<Svg>>;

export default SupportOvalMic;
export { SupportOvalMic };
