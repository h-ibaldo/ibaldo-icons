import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SubmitOpenProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SubmitOpen: ForwardRefExoticComponent<SubmitOpenProps & RefAttributes<Svg>>;

export default SubmitOpen;
export { SubmitOpen };
