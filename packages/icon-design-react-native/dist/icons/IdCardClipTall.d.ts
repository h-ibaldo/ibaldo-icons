import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface IdCardClipTallProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const IdCardClipTall: ForwardRefExoticComponent<IdCardClipTallProps & RefAttributes<Svg>>;

export default IdCardClipTall;
export { IdCardClipTall };
