import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CardProfileProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CardProfile: ForwardRefExoticComponent<CardProfileProps & RefAttributes<Svg>>;

export default CardProfile;
export { CardProfile };
