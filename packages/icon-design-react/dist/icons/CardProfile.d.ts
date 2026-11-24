import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CardProfileProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CardProfile: ForwardRefExoticComponent<CardProfileProps & RefAttributes<SVGSVGElement>>;

export default CardProfile;
export { CardProfile };
