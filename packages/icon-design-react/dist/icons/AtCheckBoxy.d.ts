import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AtCheckBoxyProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AtCheckBoxy: ForwardRefExoticComponent<AtCheckBoxyProps & RefAttributes<SVGSVGElement>>;

export default AtCheckBoxy;
export { AtCheckBoxy };
