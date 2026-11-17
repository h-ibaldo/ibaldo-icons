import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface VotePlusMinusProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const VotePlusMinus: ForwardRefExoticComponent<VotePlusMinusProps & RefAttributes<SVGSVGElement>>;

export default VotePlusMinus;
export { VotePlusMinus };
