import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AtBoxyProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AtBoxy: ForwardRefExoticComponent<AtBoxyProps & RefAttributes<SVGSVGElement>>;

export default AtBoxy;
export { AtBoxy };
