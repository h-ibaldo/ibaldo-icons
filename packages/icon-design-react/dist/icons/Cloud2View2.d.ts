import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Cloud2View2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Cloud2View2: ForwardRefExoticComponent<Cloud2View2Props & RefAttributes<SVGSVGElement>>;

export default Cloud2View2;
export { Cloud2View2 };
