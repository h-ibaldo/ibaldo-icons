import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SaveEditProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SaveEdit: ForwardRefExoticComponent<SaveEditProps & RefAttributes<SVGSVGElement>>;

export default SaveEdit;
export { SaveEdit };
