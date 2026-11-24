import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SavePlusProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SavePlus: ForwardRefExoticComponent<SavePlusProps & RefAttributes<SVGSVGElement>>;

export default SavePlus;
export { SavePlus };
