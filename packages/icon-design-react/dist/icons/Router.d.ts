import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface RouterProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Router: ForwardRefExoticComponent<RouterProps & RefAttributes<SVGSVGElement>>;

export default Router;
export { Router };
