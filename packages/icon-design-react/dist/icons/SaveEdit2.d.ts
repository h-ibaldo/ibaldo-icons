import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SaveEdit2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SaveEdit2: ForwardRefExoticComponent<SaveEdit2Props & RefAttributes<SVGSVGElement>>;

export default SaveEdit2;
export { SaveEdit2 };
