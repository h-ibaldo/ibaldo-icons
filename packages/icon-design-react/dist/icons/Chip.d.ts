import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChipProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Chip: ForwardRefExoticComponent<ChipProps & RefAttributes<SVGSVGElement>>;

export default Chip;
export { Chip };
