import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AtOneBoxyProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AtOneBoxy: ForwardRefExoticComponent<AtOneBoxyProps & RefAttributes<SVGSVGElement>>;

export default AtOneBoxy;
export { AtOneBoxy };
