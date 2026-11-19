import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface AvatarFaceSpikySideProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const AvatarFaceSpikySide: ForwardRefExoticComponent<AvatarFaceSpikySideProps & RefAttributes<Svg>>;

export default AvatarFaceSpikySide;
export { AvatarFaceSpikySide };
