import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AtXBoxyProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AtXBoxy: ForwardRefExoticComponent<AtXBoxyProps & RefAttributes<SVGSVGElement>>;

export default AtXBoxy;
export { AtXBoxy };
