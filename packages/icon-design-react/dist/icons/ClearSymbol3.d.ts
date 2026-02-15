import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ClearSymbol3Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ClearSymbol3: ForwardRefExoticComponent<ClearSymbol3Props & RefAttributes<SVGSVGElement>>;

export default ClearSymbol3;
export { ClearSymbol3 };
