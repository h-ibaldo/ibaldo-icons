import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SaveMinusProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SaveMinus: ForwardRefExoticComponent<SaveMinusProps & RefAttributes<SVGSVGElement>>;

export default SaveMinus;
export { SaveMinus };
