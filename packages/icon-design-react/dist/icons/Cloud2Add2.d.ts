import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Cloud2Add2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Cloud2Add2: ForwardRefExoticComponent<Cloud2Add2Props & RefAttributes<SVGSVGElement>>;

export default Cloud2Add2;
export { Cloud2Add2 };
