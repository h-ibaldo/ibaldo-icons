import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AtRefreshBoxyProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AtRefreshBoxy: ForwardRefExoticComponent<AtRefreshBoxyProps & RefAttributes<SVGSVGElement>>;

export default AtRefreshBoxy;
export { AtRefreshBoxy };
