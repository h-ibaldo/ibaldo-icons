import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SaveBanProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SaveBan: ForwardRefExoticComponent<SaveBanProps & RefAttributes<Svg>>;

export default SaveBan;
export { SaveBan };
