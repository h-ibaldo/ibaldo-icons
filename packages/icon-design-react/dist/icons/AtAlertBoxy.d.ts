import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AtAlertBoxyProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AtAlertBoxy: ForwardRefExoticComponent<AtAlertBoxyProps & RefAttributes<SVGSVGElement>>;

export default AtAlertBoxy;
export { AtAlertBoxy };
